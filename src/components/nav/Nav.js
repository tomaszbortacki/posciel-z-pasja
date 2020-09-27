import React from "react";
import { NavLink } from "react-router-dom";
import { BASE } from "../../utils/api";

const Nav = ({ categories }) => {
  return (
    <nav className="nav">
      {categories.map((cat, key) => (
        <NavLink
          to={`${BASE}/${cat.Link}`}
          className="link"
          activeClassName="active"
          title={cat.Name}
          alt={cat.Name}
          key={key}
        >
          {cat.Name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
