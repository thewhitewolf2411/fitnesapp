import { createContext } from "react";

interface AuthContextType{
  isLoggedIn: boolean,
  userId: null | string,
  token: null | string,
  login: (uid: string, token: string, date: Date) => void,
  logout: () => void,
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
});