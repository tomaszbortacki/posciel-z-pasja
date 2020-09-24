import React from "react";
import { Container } from "react-bootstrap";
import { API } from "../../utils/api";

const Banner = ({ element, photos }) => {
  const PHOTOS = Array.isArray(photos) ? photos : [photos];

  return (
    <section className="banner">
      {PHOTOS[0] ? (
        <figure className="banner--img">
          <img
            src={`${API}${PHOTOS[0].url}`}
            alt={PHOTOS[0].alternativeText}
            title={PHOTOS[0].alternativeText}
          />
        </figure>
      ) : (
        ""
      )}
      <Container>
        <h1>{element.Name}</h1>
      </Container>
    </section>
  );
};

export default Banner;
