import React from "react";
import { Container } from "react-bootstrap";

const Footer = ({ socials, copyrights }) => {
  return (
    <footer className="footer">
      <Container>
        <section className="footer__top">
          <section className="footer__top--left">
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
          <section className="footer__top--right">
            <p className="copyrights">{copyrights}</p>
            <p>
              Created by:{" "}
              <a
                className="link"
                href="https://www.linkedin.com/in/tomasz-bortacki-04bb96197/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Tomasz Bortacki
              </a>
            </p>
          </section>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
