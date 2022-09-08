import { Navigate, Route, Routes } from "react-router-dom";
import { AuthenticationModule, UsersModule } from "./features";
import ProductsModule from "./features/products/products.module";
import NotFoundPage from "./shared/components/ErrorPage/NotFoundPage";

import PrivateRoute from "./shared/components/PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users/list" />} />

      <Route path="/auth/*" element={<AuthenticationModule />} />

      <Route element={<PrivateRoute />}>
        <Route path="/users/*" element={<UsersModule />} />
        <Route path="/products/*" element={<ProductsModule />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
