import { Button, Grid, Stack } from '@mui/material';
import { useHistory } from 'react-router-dom';
import * as s from './styles';
import { useFetchUsers } from '../../api/users.api';
import UserItem from './UserItem';
import Loading from '../../../../shared/components/Loading';

const ListUsersPage = () => {
  const { isLoading, isError, data: users } = useFetchUsers();
  const history = useHistory();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h1>Erro ao processar consulta...</h1>;
  }

  const linkToCreate = () => {
    history.push('/users/create-user');
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
