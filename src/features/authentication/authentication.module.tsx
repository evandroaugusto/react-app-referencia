import SetupRoutes from '../../shared/components/SetupRoutes';

import { LoginPage, SignupPage } from './pages';

const ROUTES = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'signup',
    component: SignupPage,
  },
];

const AuthenticationModule = () => {
  return <SetupRoutes routes={ROUTES} />;
};

export default AuthenticationModule;
