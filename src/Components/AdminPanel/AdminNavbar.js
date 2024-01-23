import React from "react";
import logo from "../../assets/Images/logo1.png";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="flex sm:pl-10 pl-5 pt-1 sm:h-[12vh] h-[8vh] bg-gray-900 items-center">
        <img src={logo} alt="" className="w-[5%] md:w-[6%] md:h-[12vh] mr-2" />
        <h1 className="text-white sm:text-5xl align-center">
          Park<span className="text-red-700">Ease</span>
        </h1>

        {/* Menu bar */}
        <div className="m-auto">
          <ul className="flex text-white md:text-xl text-xs">
            <li className="md:ml-12 md:px-6 max-sm:px-2 sm:py-2 py-1 rounded-[25px] cursor-pointer hover:bg-red-600 hover:font-bold hover:animate-pulse">
            <Link to='/admin-dashboard' >Home</Link>
            </li>
            <li className="md:ml-12 md:px-6 max-sm:px-2 sm:py-2 py-1 rounded-[25px] cursor-pointer hover:bg-red-600 hover:font-bold hover:animate-pulse">
            <Link to='/registereduser' >Users</Link>
            </li>
            <li className="md:ml-12 md:px-6 max-sm:px-2 sm:py-2 py-1 rounded-[25px] cursor-pointer hover:bg-red-600 hover:font-bold hover:animate-pulse">
            <Link to='/settings' >Settings</Link>
            </li>
            <li className="md:ml-12 md:px-6 max-sm:px-2 sm:py-2 py-1 rounded-[25px] cursor-pointer hover:bg-red-600 hover:font-bold hover:animate-pulse">
            <Link to='/logout' >Logout</Link>
            </li>
            
            {/* <li className="md:ml-12 md:px-6 max-sm:px-2 sm:py-2 py-1 rounded-[25px] cursor-pointer hover:bg-red-600 hover:font-bold hover:animate-pulse">
            <Link to="/register">Register</Link> */}
            {/* </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
