import React, { useState } from "react";
import Nav from "../nav/Nav";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { BASE } from "../../utils/api";

const Header = ({ categories }) => {
  const [scrolled, setScrolled] = useState("");
  window.addEventListener("scroll", () =>
    setScrolled(window.pageYOffset > 0 ? " scrolled" : "")
  );

  return (
    <header className={`header${scrolled}`}>
      <Container>
        <Link to={`${BASE}/`}>
          <img
            src={logo}
            alt="Pościel z Pasją"
            title="Pościel z pasją"
            className="header__logo"
          />
        </Link>
        <Nav categories={categories} />
      </Container>
    </header>
  );
};

export default Header;
