import React from "react";
import { Container } from "react-bootstrap";
import { API } from "../../utils/api";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Banner = ({ element, photos }) => {
  const PHOTOS = Array.isArray(photos) ? photos : [photos];

  return (
    <section className="banner">
      <ParallaxProvider>
        {PHOTOS[0] ? (
          <Parallax className="banner--img" y={[-20, 20]} tagOuter="figure">
            <img
              src={`${API}${PHOTOS[0].url}`}
              alt={PHOTOS[0].alternativeText}
              title={PHOTOS[0].alternativeText}
            />
          </Parallax>
        ) : (
          ""
        )}
      </ParallaxProvider>
      <Container>
        <h1>{element.Name}</h1>
      </Container>
    </section>
  );
};

export default Banner;
