import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  const jsx = props.names.map((name, i) => (
    <NavLink key={i + 1} to={`/dogs/${name}`}>
      {name}
    </NavLink>
  ));
  return (
    <div className="NavBar">
      <NavLink key={0} exact to="/dogs">
        Home
      </NavLink>
      {jsx}
    </div>
  );
};
export default NavBar;
