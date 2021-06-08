import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const jsx = props.names.map((name, i) => (
    <NavLink key={i} to={`/dogs/${name}`}>
      {name}
    </NavLink>
  ));
  return (
    <div className="NavBar">
      <NavLink to="/">Home</NavLink>
      {jsx}
    </div>
  );
};
export default NavBar;
