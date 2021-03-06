import React from "react";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import { Container } from "react-bootstrap";
import Description from "../description/Description";
import Meta from "../meta/Meta";

const Subpage = ({ subpage, pages, socials, pageTitle, copy }) => {
  return (
    <main className="subpage">
      <Meta
        title={`${subpage.Name} - ${pageTitle}`}
        description={subpage.Description ? subpage.Description : ""}
        image={subpage.Photo ? subpage.Photo.formats.medium.url : ""}
        imageAlt={subpage.Photo ? subpage.Photo.alternativeText : ""}
      />
      <Banner element={subpage} />
      <Container>
        {subpage.Description ? (
        <section className="subpage__desc">
            <Description desc={subpage.Description} />
        </section>
        ) : (
          ""
        )}
      </Container>
      <Footer pages={pages} socials={socials} copyrights={copy} />
    </main>
  );
};

export default Subpage;
