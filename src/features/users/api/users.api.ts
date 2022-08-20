import { useMutation, useQuery, useQueryClient } from 'react-query';
import { User } from '../models/User';

// Está sendo fornecido as funções mockadas
// No cenário ideal esses comportamentos devem ser fornecidos via injeção de dependência
// O ContextAPI ajuda a reproduzir esse cenário
import { fetchUsers, fetchUser, createUser } from './mock/users.api.mock';

// React Query
export const useFetchUsers = () => {
  return useQuery(['users'], () => fetchUsers());
};

export const useFetchUser = (userId: number) => {
  return useQuery(['users', 'detail', userId], () => fetchUser(userId));
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(createUser, {
    onMutate: async (newUser: User) => {
      await queryClient.cancelQueries(['users']);
      const prevUsers = queryClient.getQueryData<User[]>(['users']);

      // realiza atualização "otimista"
      if (prevUsers) {
        queryClient.setQueryData<User[]>(['users'], [newUser, ...prevUsers]);
      }

      // cria cache da página de detalhe
      queryClient.setQueryData(['users', 'detail', newUser.id], newUser);

      return prevUsers;
    },
    onSuccess: () => {
      // invalida cache e realiza consulta em segundo plano
      // queryClient.invalidateQueries(['users']);
    },
    onError: () => {
      // lógica para desfazer a atualização "otimista"
    },
  });
};
