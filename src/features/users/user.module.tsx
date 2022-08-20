import { ListUsersPage, UserDetailPage, CreateUserPage } from './pages';
import SetupRoutes from '../../shared/components/SetupRoutes';
import UserContextProvider from './store/userContext';

const ROUTES = [
  {
    path: 'list',
    component: ListUsersPage,
  },
  {
    path: 'detail/:id',
    component: UserDetailPage,
  },
  {
    path: 'create-user',
    component: CreateUserPage,
  },
];

const UsersModule = () => {
  return (
    <UserContextProvider>
      <SetupRoutes routes={ROUTES} />
    </UserContextProvider>
  );
};

export default UsersModule;
