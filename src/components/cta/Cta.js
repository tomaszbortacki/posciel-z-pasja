import React from "react";
import { Container } from "react-bootstrap";
import Phone from "../../images/phone.svg";
import Email from "../../images/mail.svg";

const Cta = ({ contact }) => {
  return (
    <section className="cta">
      <Container>
        <section className="cta__wrapper">
          <section className="cta__wrapper--left">
            {contact.Exhortation_text ? (
              <h1>{contact.Exhortation_text}</h1>
            ) : (
              ""
            )}
          </section>
          <section className="cta__wrapper--right">
            {contact.Email ? (
              <a
                className="link"
                href={`mailto:${contact.Email}`}
                title={contact.Email}
                alt={contact.Email}
              >
                <img src={Email} alt={contact.Email} title={contact.Email} />
                <span>{contact.Email}</span>
              </a>
            ) : (
              ""
            )}
            {contact.Phone ? (
              <a
                className="link"
                href={`tel:${contact.Phone}`}
                title={contact.Phone}
                alt={contact.Phone}
              >
                <img src={Phone} alt={contact.Phone} title={contact.Phone} />
                <span>{`+48 ${contact.Phone}`}</span>
              </a>
            ) : (
              ""
            )}
          </section>
        </section>
      </Container>
    </section>
  );
};

export default Cta;
