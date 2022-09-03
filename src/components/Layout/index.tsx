import { Outlet } from "react-router-dom";
import Header from "./Header";

import { StContent } from "./Layout.styles";

const Layout: React.FC = () => (
  <>
    <Header />
    <StContent>
      <Outlet />
    </StContent>
  </>
);

export default Layout;
