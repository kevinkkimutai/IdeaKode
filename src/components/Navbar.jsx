import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../reducers/AuthReducers";

const Navbar = ({ handleLogout }) => {
  const currentUser = useSelector(selectCurrentUser);
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setemail] = useState();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleMenuItemClick = (item) => {
    // Add functionality for handling menu item clicks here
    console.log(`Clicked on ${item}`);
    // For example, you can add logic to navigate to different pages based on the item clicked
    // You can also add logout functionality or other actions here
    closeDropdown(); // Close the dropdown after an item is clicked
  };

  useEffect(() => {
    if (currentUser) {
      setfirstName(currentUser.firstName);
      setlastName(currentUser.lastName);
      setemail(currentUser.email);
    }
  }, [currentUser]);


  return (
  
<nav className=" border-gray-200 bg-gray-50">
  <div className="w-full flex flex-wrap items-center justify-between mx-auto p-3 fixed  z-40 nav">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/logo.png" className="h-8 w-8 rounded-xl" alt="cinab Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-black font-serif">Cinab_Eats</span>
  </a>
  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-revers">
  <button type="button" className={`text-black bg-blue-700 font-serif hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${currentUser ? 'hidden' : ''}`}>Get started</button>
      <button type="button" onClick={toggleDropdown} className={`flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ${currentUser ? '' : 'hidden'}`} id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="user photo" />
      </button>
      {/* <!-- Dropdown menu --> */}
      <div className={`z-50 ${isDropdownOpen ? '' : 'hidden bg-black'} my- text-base list-none bg-gray-200 divide-y divide-gray-100 rounded-lg shadow`} id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-black">{firstName} {lastName}</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{email}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 font-serif py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-black">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 font-serif py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-black">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 font-serif py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-black">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 font-serif py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-black">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium font-serif p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
      <li>
        <a href="#" className="block py-2 font-serif px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 font-serif px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 font-serif px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 font-serif px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" className="block py-2 font-serif px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  );
};

export default Navbar;