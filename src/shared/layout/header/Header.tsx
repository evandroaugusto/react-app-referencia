import { useNavigate } from "react-router";
import { useAuth } from "../../../core/store/authentication.store";
import * as s from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const { isLogged, signOut } = useAuth();

  return (
    <s.Container>
      <s.HeaderWrapper>
        <h1>Aplicação teste</h1>
        {isLogged && (
          <>
            <s.ProductsBtn
              variant="outlined"
              onClick={() => navigate("/users/list")}
            >
              Usuários
            </s.ProductsBtn>

            <s.UsersBtn
              variant="outlined"
              onClick={() => navigate("/products/list")}
            >
              Produtos
            </s.UsersBtn>

            <s.LogoutBtn variant="outlined" onClick={signOut}>
              Sair
            </s.LogoutBtn>
          </>
        )}
      </s.HeaderWrapper>
    </s.Container>
  );
};

export default Header;
