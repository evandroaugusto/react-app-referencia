import { Redirect, Route } from 'react-router';
import { useAuth } from '../../../core/store/authentication.store';

type Props = {
  path: string;
  component: any;
};

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  const { isLogged } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

export default PrivateRoute;
