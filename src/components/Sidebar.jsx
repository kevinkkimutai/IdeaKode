import { useEffect } from "react"; 

const Sidebar = () => {

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");

    const closeSidebar = () => {
      sidebar.classList.toggle("open");
      menuBtnChange(); // Call the function (optional)
    };

    const openSidebar = () => {
      sidebar.classList.toggle("open");
      menuBtnChange(); // Call the function (optional)
    };

    const menuBtnChange = () => {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    };

    closeBtn.addEventListener("click", closeSidebar);
    searchBtn.addEventListener("click", openSidebar);

    return () => {
      closeBtn.removeEventListener("click", closeSidebar);
      searchBtn.removeEventListener("click", openSidebar);
    };
  }, []);

  return (
   <div className="sidebar">
  <div className="logo-details">
  <img src="/logo1.png" className="h-12 icon rounded-full" alt="Logo"/>
    <div className="logo_name self-center text-2xl ms-2 font-semibold uppercase whitespace-nowrap dark:text-white">IdeaKode</div>
    <i className='bx bx-menu' id="btn"></i>
  </div>
  <ul className="nav-list">
    <li>
      <i className='bx bx-search'></i>
      <input type="text" placeholder="Search..." />
      <span className="tooltip">Search</span>
    </li>
    <li>
      <a href="/">
        <i className='bx bx-grid-alt'></i>
        <span className="links_name">Dashboard</span>
      </a>
      <span className="tooltip">Dashboard</span>
    </li>
    <li>
      <a href="/users">
        <i className='bx bx-user'></i>
        <span className="links_name">Users</span>
      </a>
      <span className="tooltip">Users</span>
    </li>
    <li>
      <a href="/messages">
        <i className='bx bx-chat'></i>
        <span className="links_name">Messages</span>
      </a>
      <span className="tooltip">Messages</span>
    </li>
    <li>
      <a href="/">
        <i className='bx bx-pie-chart-alt-2'></i>
        <span className="links_name">Analytics</span>
      </a>
      <span className="tooltip">Analytics</span>
    </li>
    
    <li>
      <a href="/orders">
        <i className='bx bx-cart-alt'></i>
        <span className="links_name">Order</span>
      </a>
      <span className="tooltip">Order</span>
    </li>
    <li>
      <a href="/saved">
        <i className='bx bx-heart'></i>
        <span className="links_name">Saved</span>
      </a>
      <span className="tooltip">Saved</span>
    </li>
    <li>
      <a href="/settings">
        <i className='bx bx-cog'></i>
        <span className="links_name">Setting</span>
      </a>
      <span className="tooltip">Setting</span>
    </li>
    <li className="profile">
      <div className="profile-details">
        <img src='/logo1.png'  className="h-8" alt="profileImg" />
        <div className="name_job">
          <div className="name">Kelvin Kimutai</div>
          <div className="job">Super Admin</div>
        </div>
      </div>
      <i className='bx bx-log-out' id="log_out"></i>
    </li>
  </ul>
</div>


  )
}
export default Sidebar;