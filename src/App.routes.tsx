import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthenticationModule, UsersModule } from "./features";
import NotFoundPage from "./features/error/NotFoundPage";
import PrivateRoute from "./shared/components/PrivateRoute";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" render={() => <Redirect to="/users/list" />} exact />
      <PrivateRoute path="/users" component={UsersModule} />
      <Route path="/auth" component={AuthenticationModule} />

      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default AppRoutes;
