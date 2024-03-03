import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <ul id="nav-list">
        <li onClick={() => navigate("/C/E1")}>C Program</li>
        <li onClick={() => navigate("/Python/E1")}>Python Basics</li>
      </ul>
    </div>
  );
};

export default Navbar;
