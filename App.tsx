import React, {ReactNode} from 'react';
// @ts-ignore
import {setCustomText} from 'react-native-global-props';

import AppNavigator from './src/Navigator/AppNavigator';
import { AuthContext } from './src/Context/AuthContext';
import useAuth from './src/Hooks/useAuth';

import res from './src/Res';


setCustomText({
  style: {
    fontFamily: res.Fonts.primary,
  },
});

const App: () => ReactNode = () => {
  const { token, login, logout, userId } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}>
      <AppNavigator />
    </AuthContext.Provider>
  );
};

export default App;
