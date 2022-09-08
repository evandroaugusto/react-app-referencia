import { Button, styled } from "@mui/material";

export const Container = styled("div")({
  background: "#155da4",
  margin: "auto",
});
export const HeaderWrapper = styled("div")`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 30px;
  justify-content: center;
  position: relative;
  margin: auto;
  max-width: 1150px;
  h1 {
    color: #fff;
  }
`;

export const LogoutBtn = styled(Button)`
  && {
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: #fff;
  }
`;

export const UsersBtn = styled(Button)`
  && {
    position: absolute;
    right: 100px;
    bottom: 10px;
    color: #fff;
  }
`;

export const ProductsBtn = styled(Button)`
  && {
    position: absolute;
    right: 220px;
    bottom: 10px;
    color: #fff;
  }
`;
