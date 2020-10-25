import React from "react";
import { NavLink } from "react-router-dom";
import { BASE } from "../../utils/api";

const Nav = ({ categories, pages }) => {
  return (
    <nav className="nav">
      {categories.map((cat, key) => (
        <NavLink
          to={`${BASE}/kategoria/${cat.Link}`}
          className="link"
          activeClassName="active"
          title={cat.Name}
          alt={cat.Name}
          key={key}
        >
          {cat.Name}
        </NavLink>
      ))}
      {pages.map((page, key) => (
        <NavLink
          to={`${BASE}/${page.Link}`}
          className="link"
          activeClassName="active"
          title={page.Name}
          alt={page.Name}
          key={key}
        >
          {page.Name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
