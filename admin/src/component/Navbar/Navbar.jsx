import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Admin Panel</h2>
      <img src={assets.admin_profile} alt="" className="profile" />
    </div>
  );
};

export default Navbar;
