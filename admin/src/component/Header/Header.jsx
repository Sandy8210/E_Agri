import React, { useState } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="header">
      <header>
        <GiHamburgerMenu className="logo" onClick={() => setShowNav(!showNav)} />
      </header>
      <Navbar show={showNav} />
    </div>
  );
};

export default Header;
