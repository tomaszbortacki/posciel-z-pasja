import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import LANG from "../../utils/dictionary";
import { BASE } from "../../utils/api";

const Slide = ({ name, desc, img, link }) => {
  const Lang = LANG["pl"];

  if (desc && desc.length > 120) desc = desc.substring(0, 120) + "...";

  return (
    <article className="slide">
      {img.length > 0 ? (
        <figure className="slide__img">
          <img src={img} alt={name} title={name} />
        </figure>
      ) : (
        ""
      )}

      <Container>
        <h1>{name}</h1>
        {desc ? <p className="main-text-1">{desc}</p> : ""}
        <Link to={`${BASE}/${link}`} className="link" title={name} alt={name}>
          {Lang.seeMore}
        </Link>
      </Container>
    </article>
  );
};

export default Slide;
