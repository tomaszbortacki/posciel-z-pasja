import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BASE } from "../../utils/api";

const Footer = ({ pages, socials }) => {
  return (
    <footer className="footer">
      <Container>
        <section>
          {socials.map((social, key) => (
            <a
              href={social.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              title={social.Name}
              alt={social.Name}
              key={key}
            >
              {social.Name}
            </a>
          ))}
        </section>
        <section>
          {pages.map((page, key) => (
            <Link
              to={`${BASE}/${page.Link}`}
              className="link"
              title={page.Name}
              alt={page.Name}
              key={key}
            >
              {page.Name}
            </Link>
          ))}
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
