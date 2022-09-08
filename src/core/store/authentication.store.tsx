import React, { createContext, useContext, useState } from "react";
import { useProductsStore } from "../../features/products/store/useProductStore";

const STORE_KEY = "@AUTH";

const INITIAL_STATE = {
  fullName: "Sydney Bentley",
  city: "Khebury Gille",
};

const useStore = () => {
  useProductsStore();

  const [email, setEmail] = useState<string | null>(() => {
    return getStorage();
  });

  const [state, setState] = useState(INITIAL_STATE);

  const signIn = (_email: string) => {
    setEmail(_email);
    setStorage(_email);
  };

  const reset = () => {
    setState(INITIAL_STATE);
  };

  const setFullName = (fullName: string) => {
    setState((state) => ({ ...state, fullName }));
  };

  const setCity = (city: string) => {
    setState((state) => ({ ...state, city }));
  };

  const signOut = () => {
    setEmail(null);
    reset();
  };

  return {
    email,
    isLogged: !!email,
    state,
    setFullName,
    setCity,
    signIn,
    signOut,
  };
};

// ----------------------------------------------------------------------

const getStorage = () => {
  const storage = localStorage.getItem(STORE_KEY) || null;
  return storage;
};

const setStorage = (email: string) => {
  localStorage.setItem(STORE_KEY, email);
};

// ----------------------------------------------------------------------

type AuthStore = ReturnType<typeof useStore>;

type AuthProvider = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthStore>({} as AuthStore);

export const AuthenticationProvider = ({ children }: AuthProvider) => {
  return (
    <AuthContext.Provider value={useStore()}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("AuthStore está sendo consumido fora do Provider");
  }

  return context;
};

// ----------------------------------------------------------------------

export const useSetFullName = () => useAuth().setFullName;
export const useSetCity = () => useAuth().setCity;
