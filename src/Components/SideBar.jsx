import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className="SideBar">
      <h2>{props.sub}</h2>
      <Link to="/C/E1" className="unformat-link">
        <p id="e1" className="e">
          Experiment 1
        </p>
      </Link>
      <Link to="/C/E2" className="unformat-link">
        <p id="e2" className="e">
          Experiment 2
        </p>
      </Link>
      <p id="e3" className="e">
        Experiment 3
      </p>
      <p id="e4" className="e">
        Experiment 4
      </p>
    </div>
  );
};

export default SideBar;
