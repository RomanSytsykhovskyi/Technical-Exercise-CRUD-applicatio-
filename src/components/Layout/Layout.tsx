import { Outlet } from "react-router-dom";
import NavList from "../NavList/NavList";

function Layout() {
  return (
    <>
      <NavList />
      <Outlet />
    </>
  );
}

export default Layout;
