import { Navigate } from "react-router-dom";
// import { IAuthData } from "types";
import { useAppSelector } from "../store/store.hooks";
/** HOC для авторизации
 * проверяет есть ли в localStorage информация
 * перенаправляет на страницу логина
 */

interface IRequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth: React.FC<IRequireAuthProps> = ({ children }) => {
  // const dataFromLocalStorage = localStorage.getItem("authData");
  // let auth = false;

  // if (dataFromLocalStorage) {
  //   const authData: IAuthData = JSON.parse(dataFromLocalStorage);
  //   auth = authData.isLogin;
  // }

  const isLogin = useAppSelector((state) => state.auth.isLogin);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default RequireAuth;
