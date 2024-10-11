import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Get the user from localStorage
  const user = localStorage.getItem("user");

  // Remove user by clicking the function
  const setUser = () => {
    localStorage.removeItem("user");
  };

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav-wrapper">
      <div>
        <Link to="/">
          <i>{"<OAK/>"}</i>
          <span>Recipe</span>
        </Link>
      </div>

      {/* Correct the className usage */}
      <div ref={menuRef} className={`link-wrapper ${isMenuOpen ? "show" : ""}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink onClick={setUser} to="login">
          {user ? "Logout" : "Login"}
        </NavLink>
      </div>

      <div className="burger-menu" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default NavBar;
