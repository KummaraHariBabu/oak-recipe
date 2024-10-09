import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <nav className="nav-wrapper">
      <div>
        <Link to="/">
          <i>{"<OAK/>"}</i>
          <span>Recipe</span>
        </Link>
      </div>
      <div className={show ? "link-wrapper show" : "link-wrapper"}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="login">Login</NavLink>
        <NavLink to="about">About</NavLink>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default NavBar;
