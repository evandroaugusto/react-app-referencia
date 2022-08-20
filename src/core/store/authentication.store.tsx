import React, { createContext, useContext, useState } from 'react';

type AuthContextProps = {
  children: React.ReactNode | React.ReactNode[];
};

type AuthContextData = {
  email: string | null | undefined;
  isLogged: boolean;

  signIn: (email: string) => void;

  signOut: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthenticationProvider = ({ children }: AuthContextProps) => {
  const [email, setEmail] = useState<string | null>();

  const signIn = (_email: string) => {
    setEmail(_email);
  };
  const signOut = () => setEmail(null);

  return (
    <AuthContext.Provider
      value={{
        email,
        isLogged: !!email,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
