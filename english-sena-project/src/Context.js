import React, { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(() => {
    return window.localStorage.getItem("nickname");
  });

  const value = {
    isAuth,
    activateAuth: nickname => {
      setIsAuth(true);
      window.localStorage.setItem("nickname", nickname);
    },

    removeAuth: () => {
      setIsAuth(false);
      window.localStorage.removeItem("nickname");
    }
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = React.useContext(AuthContext);

  const { isAuth, activateAuth, removeAuth } = context;

  return [isAuth, activateAuth, removeAuth];
}

export { AuthProvider, useAuth };
