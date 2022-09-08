import { Avatar, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { User } from "../../../models/User";
import * as s from "./styles";

type UserItemProps = {
  user: User;
};

const UserItem = ({ user }: UserItemProps) => {
  const navigate = useNavigate();

  const linkToDetail = (userId: number) => {
    navigate(`/users/detail/${userId}`);
  };

  return (
    <s.Card data-test={`user-${user.id}`}>
      <Avatar
        alt={user.firstName}
        src={user.image}
        sx={{ width: 80, height: 80, mr: "20px" }}
      />
      <Stack>
        <h3 data-test="fullName">
          {user.firstName} {user.lastName}
        </h3>

        <small data-test="jobTitle">{user.jobTitle}</small>
        <small data-test="email">{user.email}</small>

        <br />
        <Button
          variant="outlined"
          onClick={() => linkToDetail(user.id)}
          data-test="detailBtn"
        >
          Ver usuário
        </Button>
      </Stack>
    </s.Card>
  );
};

export default UserItem;
