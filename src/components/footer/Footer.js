import React from "react";
import { Container } from "react-bootstrap";

const Footer = ({ socials, copyrights }) => {
  return (
    <footer className="footer">
      <Container>
        <section className="footer__top">
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
        </section>
        <section className="footer__bottom">
          <p>
            Created by:{" "}
            <a
              className="link"
              href="https://www.linkedin.com/in/tomasz-bortacki-04bb96197/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tomasz Bortacki
            </a>
          </p>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
