"use client"; 
import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import '../styles/dash.css';

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "DigiKura",
//   description: "Elevate your online presence with DigiKura. We specialize in bespoke web design solutions tailored to your brand's needs. From captivating layouts to seamless user experiences, let us bring your vision to life.",
// };

export default function RootLayout({ children }) {
  function handleClick() {
    // Select the sidebar element and add the "open" class
    const navbar = document.querySelector(".navbar");
    navbar.classList.remove("hidden");
  };

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
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
      <link rel='stylesheet' href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'/>
      </head>
      <body className={inter.className}>
      <div className="sidebar">
  <div className="logo-details">
  <img src="/logo.png" className="h-8 icon" alt="Flowbite Logo"/>
    <div className="logo_name self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DigiKura</div>
    <i className='bx bx-menu' id="btn"></i>
  </div>
  <ul className="nav-list">
    <li>
      <i className='bx bx-search'></i>
      <input type="text" placeholder="Search..." />
      <span className="tooltip">Search</span>
    </li>
    <li>
      <a href="#">
        <i className='bx bx-grid-alt'></i>
        <span className="links_name">Dashboard</span>
      </a>
      <span className="tooltip">Dashboard</span>
    </li>
    <li>
      <a href="/about">
        <i className='bx bx-user'></i>
        <span className="links_name">User</span>
      </a>
      <span className="tooltip">User</span>
    </li>
    <li>
      <a href="#">
        <i className='bx bx-chat'></i>
        <span className="links_name">Messages</span>
      </a>
      <span className="tooltip">Messages</span>
    </li>
    <li>
      <a href="#">
        <i className='bx bx-pie-chart-alt-2'></i>
        <span className="links_name">Analytics</span>
      </a>
      <span className="tooltip">Analytics</span>
    </li>
    <li>
      <a href="#">
        <i className='bx bx-folder'></i>
        <span className="links_name">File Manager</span>
      </a>
      <span className="tooltip">Files</span>
    </li>
    <li>
      <a href="#">
        <i className='bx bx-cart-alt'></i>
        <span className="links_name">Order</span>
      </a>
      <span className="tooltip">Order</span>
    </li>
    <li>
      <a href="#">
        <i className='bx bx-heart'></i>
        <span className="links_name">Saved</span>
      </a>
      <span className="tooltip">Saved</span>
    </li>
    <li>
      <a href="#">
        <i className='bx bx-cog'></i>
        <span className="links_name">Setting</span>
      </a>
      <span className="tooltip">Setting</span>
    </li>
    <li className="profile">
      <div className="profile-details">
        <img src='/logo.png' alt="profileImg" />
        <div className="name_job">
          <div className="name">Kelvin Kimutai</div>
          <div className="job">Web designer</div>
        </div>
      </div>
      <i className='bx bx-log-out' id="log_out"></i>
    </li>
  </ul>
</div>
<section className="navbar text-white flex justify-between">

<nav class="bgnav w-full  top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">

  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/logo.png" class="h-8" alt="Digikura Logo"/>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      <button onClick={handleClick} class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

</section>
      <section className="home-section">
      {children}
</section>
</body>
    </html>
  );
}
