import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Search from "../../images/search.svg";
import { API } from "../../utils/api";

const Gallery = ({ photos }) => {
  return (
    <section className="gallery">
      <SimpleReactLightbox>
        <SRLWrapper>
          {photos.map((photo, key) => (
            <a
              href={`${API}${photo.url}`}
              className="gallery--img"
              key={key}
              data-attribute="SRL"
              alt={photo.alternativeText}
              title={photo.alternativeText}
            >
              <div
                className="cover"
                style={{ backgroundImage: `url('${Search}')` }}
              ></div>
              <img
                src={`${API}${photo.formats.small.url}`}
                alt={photo.alternativeText}
                title={photo.alternativeText}
              />
            </a>
          ))}
        </SRLWrapper>
      </SimpleReactLightbox>
    </section>
  );
};

export default Gallery;
