import { Route, Routes } from "react-router-dom";
import { LoginPage, SignupPage } from "./pages";

const AuthenticationModule = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="signip" element={<SignupPage />} />
    </Routes>
  );
};

export default AuthenticationModule;
