import { Navigate } from "react-router-dom";
import { IAuthData } from "types";

/** HOC для авторизации
 * проверяет есть ли в localStorage информация
 * перенаправляет на страницу логина
 */

interface IRequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth: React.FC<IRequireAuthProps> = ({ children }) => {
  const dataFromLocalStorage = localStorage.getItem("authData");
  let auth = false;

  if (dataFromLocalStorage) {
    const authData: IAuthData = JSON.parse(dataFromLocalStorage);
    auth = authData.isLogin;
  }

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default RequireAuth;
