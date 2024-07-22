"use client";

import { createContext, ReactNode, useState } from "react";

interface LoggedUser {
  nickname: string;
  email: string;
}

interface AuthContextType {
  loggedUser: LoggedUser;
  loggedIn: boolean;
  setLoggedUser: (data: LoggedUser) => void;
  setLoggedIn: () => void;
}

const AuthContext = createContext<AuthContextType>({
  loggedUser: {
    nickname: "",
    email: "",
  },
  loggedIn: false,
  setLoggedUser: () => {},
  setLoggedIn: () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthContextType>({
    loggedUser: {
      nickname: "",
      email: "",
    },
    loggedIn: false,
    setLoggedUser: (data: LoggedUser) => {
      setState((prevState) => ({
        ...prevState,
        loggedUser: data,
      }));
    },
    setLoggedIn: () => {
      setState((prevState) => ({
        ...prevState,
        loggedIn: !prevState.loggedIn,
      }));
    },
  });

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
