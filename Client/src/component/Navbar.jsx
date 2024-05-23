import React, { useState } from "react";
import navData from "../Utills/NavData";
import { NavLink } from "react-router-dom";
import OpenNavbar from "./OpenNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-gray-600 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">E-Agri</div>
        <div className="hidden md:flex space-x-4">
          {navData.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-orange-400" : "text-gray-300 hover:text-white"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={handleOpen}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && <OpenNavbar setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;
