import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../footer/Footer";
import Banner from "../banner/Banner";
import Description from "../description/Description";
import Gallery from "../gallery/Gallery";
import Cta from "../cta/Cta";
import Meta from "../meta/Meta";
import ProgressBar from "../progressBar/ProgressBar";

const Product = ({ product, pages, socials, contact, pageTitle, copy }) => {
  return (
    <main className="product">
      <ProgressBar />
      <Meta
        title={`${product.Name} - ${pageTitle}`}
        description={product.Description ? product.Description : ""}
        image={product.Photos[0] ? product.Photos[0].formats.medium.url : ""}
        imageAlt={product.Photos[0] ? product.Photos[0].alternativeText : ""}
      />
      <Banner element={product} photos={product.Photos} />
      <Container>
        <section className="product__desc">
          {product.Description ? (
            <Description desc={product.Description} />
          ) : (
            ""
          )}
        </section>
        <Gallery photos={product.Photos} />
        <Cta contact={contact} />
      </Container>
      <Footer pages={pages} socials={socials} copyrights={copy} />
    </main>
  );
};

export default Product;
