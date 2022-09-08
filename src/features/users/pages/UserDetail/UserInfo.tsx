import { Paper, styled } from "@mui/material";
import { useAuth } from "../../../../core/store/authentication.store";

const Content = styled(Paper)({
  padding: 32,
  marginBottom: 32,
});

const Inline = styled("div")({
  display: "flex",
});

// ----------------------------------------------------------------------

const UserInfo = () => {
  const { state } = useAuth();

  return (
    <Content>
      <h2>Informações adicionais:</h2>
      <Inline>
        <h4>Responsável</h4>: {state.fullName}
      </Inline>

      <Inline>
        <h4>Cidade</h4>:{state.city} <br />
      </Inline>
    </Content>
  );
};

export default UserInfo;
