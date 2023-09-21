import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import { Link, NavLink } from "react-router-dom"; // Import NavLink

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navLinks = [
    { id: 1, to: "/", name: "Home" },
    { id: 2, to: "/homestay", name: "Homestay" },
    { id: 3, to: "/location", name: "Location" },
  ];

  const authLinks = [
    { id: 1, to: "/signin", name: "LogIn" },
    { id: 2, to: "/signup", name: "SignUp" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-xl text-white bg-black">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="h-[50px]" />
        </Link>
      </div>

      <ul className="hidden md:flex">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-semibold text-gray-500 p-2 hover:underline hover:scale-110 duration-200"
          >
            <NavLink 
              to={link.to}
              activeClassName="active-link"
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="hidden space-x-2 lg:block">
        <Link to="/signup">
          <button
            type="button"
            className="rounded-md bg-transparent px-3 py-2 text-sm hover:scale-105 font-semibold text-bwhitehover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Sign Up
          </button>
        </Link>
        <Link to="/signin">
          <button
            type="button"
            className="rounded-md border border-white px-3 py-2 text-sm hover:scale-105 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Log In
          </button>
        </Link>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-auto h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110"
            >
              <NavLink 
                to={link.to}
                activeClassName="active-link" 
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {authLinks.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize font-medium m-6 p-3 bg-neutral-200 rounded-[25px] text-gray-500 hover:bg-gradient-to-r from-cyan-300 to-sky-500 hover:scale-110 duration-200"
            >
              <NavLink 
                to={link.to}
                activeClassName="active-link" 
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <img src={logo1} alt="logo" className="h-[50px]" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
