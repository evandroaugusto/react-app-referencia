import { useAuth } from '../../../core/store/authentication.store';
import * as s from './styles';

const Header = () => {
  const { isLogged, signOut } = useAuth();
  return (
    <s.HeaderWrapper>
      <h1>Aplicação teste</h1>

      {isLogged && (
        <s.LogoutBtn variant="outlined" onClick={signOut}>
          Sair
        </s.LogoutBtn>
      )}
    </s.HeaderWrapper>
  );
};

export default Header;
