import { useMutation } from 'react-query';

export type Credentials = {
  email: string;
  password: string;
};

//
// Aqui está sendo fornecido direto os dados mockados
// para entender como pode ser feito a separação entre o mock e o serviço
// olhar o módulo "users".
//

const authenticate = async (credentials: Credentials) => {
  const { email, password } = credentials;

  // simula delay
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, 2000)
  );

  if (email === 'admin@teste.com.br' && password === '1234') {
    return true;
  }

  throw Error('Invalid login');
};

// react query
export const useAuthenticate = () => {
  return useMutation(authenticate);
};
