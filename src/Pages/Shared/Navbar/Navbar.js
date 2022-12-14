import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext/UserContext';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then(() => {toast.success('Successfully Logout')}).catch(err => console.log(err));
  } 
  return (
    <div className="sticky top-0 border-b z-10">
      <nav className="bg-[#f2e1d9] border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center w-5/6 mx-auto">
          <Link to="/" className="text-3xl">
            BecheDaw.com
          </Link>
          <button
            onClick={() => setOpen(!open)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="true"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={
              open ? "w-full md:block md:w-auto" : "hidden md:block md:w-auto"
            }
            id="navbar-sticky"
          >
            {/* make sure will add animation last time */}
            <ul className="flex flex-col items-center p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/home"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#fd8f5f] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#fd8f5f] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blogs
                </Link>
              </li>
              {
                user?.uid && <li><Link to="/dashboard"
                 className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#fd8f5f] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
               >Dashboard</Link></li>
              }
             {
              user ? <li className='block py-2 pr-4 pl-3 border px-8 bg-[#fd8f5f] text-white' onClick={handleLogout}>Logout</li> : <li>
                 <Link
                  to="/login"
                  className="border px-8 py-2 bg-[#fd8f5f] text-white"
                >
                 Login
                </Link>
              </li>
             }
             </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;