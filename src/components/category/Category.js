import React from "react";
import Footer from "../footer/Footer";
import { Container } from "react-bootstrap";
import { API, BASE } from "../../utils/api";
import { Link } from "react-router-dom";
import Banner from "../banner/Banner";
import Description from "../description/Description";
import Meta from "../meta/Meta";

const Category = ({ category, products, pages, socials, pageTitle }) => {
  return (
    <main className="category">
      <Meta
        title={`${category.Name} - ${pageTitle}`}
        description={category.Description ? category.Description : ""}
        image={category.Photo ? category.Photo.formats.medium.url : ""}
        imageAlt={category.Photo ? category.Photo.alternativeText : ""}
      />
      <Banner element={category} photos={category.Photo} />
      <Container>
        <section className="category__desc">
          {category.Description ? (
            <Description desc={category.Description} />
          ) : (
            ""
          )}
        </section>
        <section className="category__products">
          {products.map((product, key) => (
            <section className="category-product" key={key}>
              <Link
                to={`${BASE}/${product.Link}`}
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
      </Container>
      <Footer pages={pages} socials={socials} />
    </main>
  );
};

export default Category;
