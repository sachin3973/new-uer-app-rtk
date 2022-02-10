import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar__container">
      <ul className="navigation">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <Link to="/users">
          <li>Users</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
