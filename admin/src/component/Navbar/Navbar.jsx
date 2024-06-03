import React from "react";
import "./Navbar.css";
import { sideBar_data } from "../../utills/sideBar_data";
import { NavLink } from "react-router-dom";

const Navbar = ({ show }) => {
  return (
    <div className={show ? "sideNav active" : "sideNav"}>
      {sideBar_data.map((item, index) => (
        <NavLink
          to={item.path}
          className={item.className}
          activeclassname="active"
          key={index}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
