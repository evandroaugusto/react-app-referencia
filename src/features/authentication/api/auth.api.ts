import { useMutation } from "@tanstack/react-query";

export type Credentials = {
  email: string;
  password: string;
};

//
// Aqui está sendo fornecido os dados mockados
//

const authenticate = async (credentials: Credentials) => {
  const { email, password } = credentials;

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, 2000)
  );

  if (email === "admin@teste.com.br" && password === "1234") {
    return true;
  }

  throw Error("Invalid login");
};

// react query
export const useAuthenticate = () => {
  return useMutation(authenticate);
};
