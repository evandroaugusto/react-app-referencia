import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../../../core/store/authentication.store";
import { useAuthenticate } from "../../api/auth.api";
import LoginForm, { FormInputs } from "./LoginForm";
import * as s from "./styles";

const LoginPage = () => {
  const authenticate = useAuthenticate();
  const { signIn } = useAuth();
  const [isInvalid, setIsInvalid] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data: FormInputs) => {
    setIsInvalid(false);

    authenticate.mutate(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          signIn(data.email);
          navigate("/users/list");
        },
        onError: () => setIsInvalid(true),
      }
    );
  };
  return (
    <s.Container>
      <h1>Login</h1>

      <LoginForm onSubmit={onSubmit} isLoading={authenticate.isLoading} />

      {isInvalid && <s.Error className="error">Autenticação inválida</s.Error>}
    </s.Container>
  );
};

export default LoginPage;
