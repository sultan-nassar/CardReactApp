import React, { useContext, useEffect, useMemo, useState } from "react";
import { getToken, getUser } from "../services/localStorageService";
import { createContext } from "react";
import { node } from "prop-types";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [token, setToken] = useState(getToken());

  useEffect(() => {
    if (!user) {
      const userFromLocalStorage = getUser();
      setUser(userFromLocalStorage);
    }
  }, [user]);

  const value = useMemo(() => {
    return { token, user, setUser, setToken };
  }, [token, user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useTheme must be used within a NameProvider");
  return context;
};

UserProvider.propTypes = {
  children: node.isRequired,
};
