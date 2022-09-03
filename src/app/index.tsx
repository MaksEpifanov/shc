import { Route, Routes } from "react-router-dom";

import { useAppDispatch } from "store/store.hooks";
import { updateAuth } from "store/features/auth/auth.slice";

import LoginPage from "../pages/Login";
import HotelsPage from "../pages/Hotels/index";
import NotFoundPage from "../pages/404/index";
import Layout from "../components/Layout/index";
import RequireAuth from "../hoc/RequireAuth";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const authData = localStorage.getItem("authData");

  if (authData) {
    dispatch(updateAuth(JSON.parse(authData)));
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RequireAuth>
              <HotelsPage />
            </RequireAuth>
          }
        />
        <Route
          path="*"
          element={
            <RequireAuth>
              <NotFoundPage />
            </RequireAuth>
          }
        />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
export default App;
