import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/allReviews">All Reviews</NavLink></li>
      <li><NavLink to="/addReviews">Add Reviews</NavLink></li>
      <li><NavLink to="/myReviews">My Reviews</NavLink></li>
      <li><NavLink to="/gameWatchList">Game WatchList</NavLink></li>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-cyan-700 to-blue-500">
      <div className="navbar w-11/12 mx-auto text-white">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Dropdown for small devices */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-black w-52"
            >
              {links}
            </ul>
          </div>

          {/* Branding */}
          <NavLink to="/" className=" normal-case text-xl">
            🎮 <span className="ml-2 font-bold text-left">Gaming<br />World!</span>
          </NavLink>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            <label className="flex cursor-pointer gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                   strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>

            {/* User image icon */}
            <div className="w-8 h-8 rounded-full border border-white bg-gray-200"></div>

            {/* Login Button */}
            <button className="btn border border-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-6 text-white hover:opacity-90">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
