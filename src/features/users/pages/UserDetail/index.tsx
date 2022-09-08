import { Avatar, Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import Loading from "../../../../shared/components/Loading";
import { useFetchUser } from "../../api/users.api";
import UserInfo from "./UserInfo";

type UrlParams = {
  id: string;
};

const UserDetailPage = () => {
  const { id } = useParams<UrlParams>();
  const navigate = useNavigate();

  const { isLoading, data: user } = useFetchUser(Number(id));

  const linkToUsers = () => {
    navigate("/users/list");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box lineHeight="1.5" maxWidth="800px" margin="0 auto">
      <Avatar
        alt={user?.firstName}
        src={user?.image}
        sx={{
          width: 100,
          height: 100,
          mb: "20px",
          backgroundColor: user?.image ? "#fff" : "#919191",
        }}
      />
      <h1>
        {user?.firstName} {user?.lastName}
      </h1>
      <p>
        <b>Email</b>: {user?.email}
      </p>
      <p>
        <b>Gênero</b>: {user?.gender}
      </p>
      <p>
        <b>Cargo</b>: {user?.jobTitle}
      </p>
      <p>
        <b>Sobre</b>: {user?.about}
      </p>
      <br />

      <UserInfo></UserInfo>

      <Button variant="contained" onClick={linkToUsers}>
        Voltar
      </Button>
    </Box>
  );
};

export default UserDetailPage;
