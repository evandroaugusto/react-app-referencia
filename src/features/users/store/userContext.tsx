import React, { createContext, useEffect, useState } from 'react';

type userContextProps = {
  nome: string;
  sobrenome: string;
  setNome: any;
};

export const UserContext = createContext<userContextProps>(
  {} as userContextProps
);

const UserContextProvider: React.FC = ({ children }) => {
  const [name, setName] = useState('Evandro');

  useEffect(() => {}, []);

  return (
    <UserContext.Provider
      value={{
        nome: name,
        sobrenome: 'Oliveira',
        setNome: setName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
