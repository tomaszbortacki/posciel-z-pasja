import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const Gallery = ({ photos }) => {
  return (
    <section className="gallery">
      <SimpleReactLightbox>
        <SRLWrapper>
          {photos.map((photo, key) => (
            <a
              href={photo.url}
              className="gallery--img"
              key={key}
              data-attribute="SRL"
              alt={photo.alternativeText}
              title={photo.alternativeText}
            >
              <div className="cover"></div>
              <img
                src={photo.formats.small.url}
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
