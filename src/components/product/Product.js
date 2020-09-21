import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../footer/Footer";
import Banner from "../banner/Banner";
import Description from "../description/Description";
import Gallery from "../gallery/Gallery";

const Product = ({ product, pages, socials }) => {
  console.log(product);
  return (
    <main className="product">
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
      </Container>
      <Footer pages={pages} socials={socials} />
    </main>
  );
};

export default Product;
