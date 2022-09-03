import { Link } from "react-router-dom";
import { LogoutSvg } from "assets/images";

import { logout } from "store/features/auth/auth.slice";
import { useAppDispatch } from "store/store.hooks";

import { StHeader, StLogo, StLogoutBtn } from "./Header.styles";

/** Header
 * Компонент отвечает за выход пользователя
 * dispatch logout
 * перенаправляет на страницу логина
 */

const Header: React.FC = () => {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // navigate("/login", { replace: true });
  };

  return (
    <StHeader>
      <StLogo>
        <Link to="/">Simple Hotel Check</Link>
      </StLogo>
      <StLogoutBtn onClick={() => handleLogout()}>
        Выход <LogoutSvg />
      </StLogoutBtn>
    </StHeader>
  );
};

export default Header;
