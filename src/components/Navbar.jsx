import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css"

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>PARTH.</h1>
      <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={menuOpen ? "active" : ""}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Project</a></li>
        <li><a href="#certificate" onClick={() => setMenuOpen(false)}>Certificate</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        <li className="btn">
          <button style={{marginTop:"-10px"}} className="theme" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "dark" : "Light"}
          </button>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;