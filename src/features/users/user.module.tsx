import { ListUsersPage, UserDetailPage, CreateUserPage } from "./pages";
import { UserContextProvider } from "./store/userContext";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../shared/components/ErrorPage/NotFoundPage";

const UsersModule = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="list" element={<ListUsersPage />}></Route>
        <Route path="detail/:id" element={<UserDetailPage />}></Route>
        <Route path="create-user" element={<CreateUserPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </UserContextProvider>
  );
};

export default UsersModule;
