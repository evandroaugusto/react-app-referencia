import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFoundPage from '../../../features/error/NotFoundPage';

type Props = {
  routes: any;
};

const SetupRoutes = ({ routes }: Props) => {
  const match = useRouteMatch();
  return (
    <Switch>
      {routes.map((route: any) => {
        const { path, exact, ...props } = route;

        return (
          <Route
            key={`${path}`}
            path={`${match.url}/${path}`}
            exact={exact === undefined ? true : exact}
            {...props}
          />
        );
      })}

      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default SetupRoutes;
