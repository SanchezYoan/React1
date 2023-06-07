import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>acceuil</li>
        </NavLink>
        <NavLink to="/About">
          <li>à propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;