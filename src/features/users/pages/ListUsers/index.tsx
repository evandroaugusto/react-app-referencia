import { Button, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFetchUsers } from "../../api/users.api";
import UserItem from "./UserItem";
import Loading from "../../../../shared/components/Loading";
import * as s from "./styles";
import { useUserStore } from "../../store/userContext";

const ListUsersPage = () => {
  //const { isLoading, data: users } = useFetchUsers();
  const { isLoading, users } = useUserStore();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  const linkToCreate = () => {
    navigate("/users/create-user");
  };

  return (
    <s.Container>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <s.Title>Usuários</s.Title>

        <Button variant="outlined" onClick={linkToCreate}>
          Criar usuário
        </Button>
      </Stack>

      <Grid container spacing={2}>
        {users &&
          users.map((user) => (
            <Grid item key={user.id} xs={12} sm={6} md={4}>
              <UserItem user={user} />
            </Grid>
          ))}
      </Grid>
    </s.Container>
  );
};

export default ListUsersPage;
