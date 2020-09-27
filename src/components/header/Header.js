import React, { useState } from "react";
import Nav from "../nav/Nav";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { BASE } from "../../utils/api";
import MobileButton from "../mobile/MobileButton";

const Header = ({ categories, pages, mobileActive, setMobileActive }) => {
  const [scrolled, setScrolled] = useState("");
  window.addEventListener("scroll", () =>
    setScrolled(window.pageYOffset > 0 ? " scrolled" : "")
  );

  return (
    <header className={`header${scrolled}${mobileActive ? " active" : ""}`}>
      <Container>
        <Link to={`${BASE}/`}>
          <img
            src={logo}
            alt="Pościel z Pasją"
            title="Pościel z pasją"
            className="header__logo"
          />
        </Link>
        <MobileButton
          mobileActive={mobileActive}
          setMobileActive={setMobileActive}
        />
        <Nav categories={categories} pages={pages} />
      </Container>
    </header>
  );
};

export default Header;
