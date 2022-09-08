import { Navigate, Outlet, Route } from "react-router";
import { useAuth } from "../../../core/store/authentication.store";

type Props = {
  children?: React.ReactElement;
};

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return <Navigate to="/auth/login" />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
