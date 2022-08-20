import { clientHttp } from '../../../../core/services/client-http';
import { User } from '../../models/User';
import { UserDTO } from '../user.dto';

export const fetchUsers = async (): Promise<User[]> => {
  return clientHttp
    .get<UserDTO[]>('/users')
    .then(({ data: users }) => users.map((user) => User.fromDTO(user)));
};

export const fetchUser = async (id: number): Promise<User> => {
  return clientHttp
    .get<UserDTO>(`/users/${id}`)
    .then(({ data: userDTO }) => User.fromDTO(userDTO));
};

export const createUser = async (user: User): Promise<void> => {
  return clientHttp.post('/users', User.toDTO(user));
};
