import React from "react";
import Footer from "../footer/Footer";
import { Container } from "react-bootstrap";
import { API, BASE } from "../../utils/api";
import { Link } from "react-router-dom";
import Banner from "../banner/Banner";
import Description from "../description/Description";
import Meta from "../meta/Meta";
import Gallery from "../gallery/Gallery";
import ProgressBar from "../progressBar/ProgressBar";

const Category = ({ category, products, pages, socials, pageTitle, copy }) => {
  return (
    <main className="category">
      <ProgressBar />
      <Meta
        title={`${category.Name} - ${pageTitle}`}
        description={category.Description ? category.Description : ""}
        image={category.Cover ? category.Cover.formats.medium.url : ""}
        imageAlt={category.Cover ? category.Cover.alternativeText : ""}
      />
      <Banner element={category} photos={category.Cover} />
      <Container>
        {category.Description ? (
          <section className="category__desc">
            <Description desc={category.Description} />
          </section>
        ) : (
          ""
        )}
        {products.length>0?
          <section className="category__products">
            <h2>Produkty</h2><hr/>
            <section className="category__products--wrapper">
            {products.map((product, key) => (
              <section className="category-product" key={key}>
                <Link
                  to={`${BASE}/produkt/${product.Link}`}
                  alt={product.Name}
                  title={product.Name}
                >
                  <figure className="category-product__img">
                    {product.Photos[0] ? (
                      <img
                        src={`${API}${product.Photos[0].url}`}
                        alt={product.Photos[0].alternativeText}
                        title={product.Photos[0].alternativeText}
                      />
                    ) : (
                      ""
                    )}
                  </figure>
                  <section className="category-product__desc">
                    <h2>{product.Name}</h2>
                  </section>
                </Link>
              </section>
            ))}
            </section>
          </section>
        :""}
        {category.Photos.length>0?
          <section className="category__photos">
            <h2>Zdjęcia</h2><hr/>
            <Gallery photos={category.Photos} />
          </section>
        :""}
      </Container>
      <Footer pages={pages} socials={socials} copyrights={copy} />
    </main>
  );
};

export default Category;
