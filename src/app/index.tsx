import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login";
import HotelsPage from "../pages/Hotels/index";
import NotFoundPage from "../pages/404/index";
import Layout from "../components/Layout/index";
import RequireAuth from "../hoc/RequireAuth";

const App: React.FC = () => (
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

export default App;
