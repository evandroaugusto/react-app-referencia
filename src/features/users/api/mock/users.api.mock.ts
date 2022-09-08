import { User } from "../../models/User";
import { UserDTO } from "../dto/user.dto";
import FETCH_USERS from "./usersData.mock";

export const fetchUsers = async (): Promise<User[]> => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, 1000)
  );

  return Promise.resolve(FETCH_USERS).then((users: UserDTO[]) =>
    users.map((user) => User.fromDTO(user))
  );
};

export const fetchUser = async (id: number): Promise<User> => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, 1000)
  );

  const user = FETCH_USERS.find((_user) => _user.id === id) as UserDTO;
  return Promise.resolve(user).then((userDTO) => User.fromDTO(userDTO));
};

export const createUser = async (user: User): Promise<void> => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, 1000)
  );
};
