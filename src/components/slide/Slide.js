import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API, BASE } from "../../utils/api";

const Slide = ({ name, desc, img, link }) => {

  if (desc && desc.length > 120) desc = desc.substring(0, 120) + "...";

  return (
    <article className="slide">
      {img.length > 0 ? (
        <figure className="slide__img">
          <img src={`${API}${img}`} alt={name} title={name} />
        </figure>
      ) : (
        ""
      )}

      <Container>
        <h1>{name}</h1>
        {desc ? <p className="main-text-1">{desc}</p> : ""}
        <Link to={`${BASE}/kategoria/${link}`} className="link" title={name} alt={name}>
          Zobacz więcej
        </Link>
      </Container>
    </article>
  );
};

export default Slide;
