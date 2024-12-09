import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <button className="menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FiX size={24} color="white" /> : <FiMenu size={24} color="white" />}
      </button>
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
