import React from "react";
import Phone from "../../images/phone.svg";
import Email from "../../images/mail.svg";

const Cta = ({ contact }) => {
  return (
    <section className="cta">
      <section className="cta__wrapper">
        <section className="cta__wrapper--top">
          {contact.Exhortation_text ? <h1>{contact.Exhortation_text}</h1> : ""}
        </section>
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
      </section>
    </section>
  );
};

export default Cta;
