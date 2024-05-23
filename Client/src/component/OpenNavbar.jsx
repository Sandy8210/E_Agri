import React from "react";
import navData from "../Utills/NavData";
import { NavLink } from "react-router-dom";

const OpenNavbar = ({ setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden mt-2 space-y-2">
      {navData.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "block text-white text-center py-3"
              : "block text-gray-300 hover:text-orange-500 text-center py-3"
          }
          onClick={handleClose}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default OpenNavbar;
