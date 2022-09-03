import { Link, useNavigate } from "react-router-dom";
import { LogoutSvg } from "assets/images";
import { StHeader, StLogo, StLogoutBtn } from "./Header.styles";

/** Header
 * Компонент отвечает за выход пользователя
 * удаляет из localStorage информацию
 * перенаправляет на страницу логина
 */

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authData");
    navigate("/login", { replace: true });
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
