import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchUsers } from "../api/mock/users.api.mock";

import { User } from "../models/User";

const useStore = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>("");

  const callFetchUsers = async () => {
    setIsLoading(true);

    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const update = () => {
    callFetchUsers();
  };

  useEffect(() => {
    callFetchUsers();
  }, []);

  return {
    users,
    setUsers,
    isLoading,
    error,
    update,
  };
};

// ----------------------------------------------------------------------

type UserStore = ReturnType<typeof useStore>;

type PropsProvider = {
  children: React.ReactNode;
};

const UserContext = createContext<UserStore>({} as UserStore);

export const UserContextProvider: React.FC<PropsProvider> = ({ children }) => {
  return (
    <UserContext.Provider value={useStore()}>{children}</UserContext.Provider>
  );
};

export const useUserStore = () => {
  return useContext(UserContext);
};
