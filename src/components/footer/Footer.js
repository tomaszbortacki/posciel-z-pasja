import React from "react";
import { Container } from "react-bootstrap";

const Footer = ({ socials, copyrights }) => {
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
        <p className="copyrights">{copyrights}</p>
      </Container>
    </footer>
  );
};

export default Footer;
