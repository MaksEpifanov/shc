import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/store.hooks";

/** HOC для авторизации
 *
 * проверяет есть ли в стейте информация
 * перенаправляет на страницу логина
 */

interface IRequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth: React.FC<IRequireAuthProps> = ({ children }) => {
  const isLogin = useAppSelector((state) => state.auth.isLogin);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default RequireAuth;
