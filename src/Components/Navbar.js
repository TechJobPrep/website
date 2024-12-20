import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/cd">Courses</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
