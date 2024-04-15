import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";

const Layout = ({ handleLogout }) => {
  return (

    <>
     
      <NavBar handleLogout={handleLogout}/>
       <Outlet />
    <Footer />
    </>

  );
};

export default Layout;
