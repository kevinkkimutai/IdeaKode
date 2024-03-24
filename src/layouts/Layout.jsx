import { NavBar, Sidebar } from "../components";

const Layout = ({ children, handleLogout }) => {
  return (

    <>
      <Sidebar/>
      <section className="home-section">
      <NavBar/>
        {children}
      </section>
    </>

  );
};

export default Layout;
