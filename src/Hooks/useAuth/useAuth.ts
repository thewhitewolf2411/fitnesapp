import {useCallback, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

let logoutTimer: NodeJS.Timer;

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [tokenExpirationDate, setTokenExpiratioNDate] = useState<Date | null>(
    null,
  );
  const [userId, setUserid] = useState<string | null>(null);

  const login = useCallback(
    async (uid: string, token: string, expirationDate: Date) => {
      setToken(token);
      setUserid(uid);
      const tokenExpirationDate =
        expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
      setTokenExpiratioNDate(tokenExpirationDate);
      await AsyncStorage.setItem(
        'userData',
        JSON.stringify({
          userId: uid,
          token: token,
          expiration: tokenExpirationDate.toISOString(),
        }),
      );
    },
    [],
  );

  const logout = useCallback(async () => {
    setToken(null);
    setTokenExpiratioNDate(null);
    setUserid(null);
    await AsyncStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    const handleIsLoggedIn = async () => {
      const data = await AsyncStorage.getItem('userData');
      const storedData = JSON.parse(data || '{}');

      if (storedData && storedData.token && new Date(storedData.expiration) > new Date()
      ) { login(storedData.userId, storedData.token, new Date(storedData.expiration));
      }
    };

    handleIsLoggedIn();
  }, [login]);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  return {token, login, logout, userId};
};
