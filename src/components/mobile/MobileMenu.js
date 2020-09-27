import React from "react";
import Nav from "../nav/Nav";

const MobileMenu = ({ categories, pages, mobileActive }) => {
  return (
    <section className={`mobile-menu${mobileActive ? " active" : ""}`}>
      <Nav categories={categories} pages={pages} />
    </section>
  );
};

export default MobileMenu;
