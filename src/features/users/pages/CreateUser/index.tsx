import { useHistory } from "react-router";
import UserForm from "./UserForm";
import * as s from "./styles";
import { User } from "../../models/User";
import { useCreateUser } from "../../api/users.api";
import Loading from "../../../../shared/components/Loading";

const CreateUserPage = () => {
  const history = useHistory();
  const createUser = useCreateUser();

  const onSubmit = (user: User) => {
    createUser.mutate(user, {
      onSuccess: () => history.push("/users/list"),
    });
  };

  if (createUser.isLoading) {
    return <Loading />;
  }

  return (
    <s.Container>
      <s.Title>Novo usuário</s.Title>

      <UserForm onSubmit={onSubmit} />
    </s.Container>
  );
};

export default CreateUserPage;
