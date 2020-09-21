import React, { useState } from "react";
import { API } from "../../utils/api";
import Slider from "../slider/Slider";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../footer/Footer";

const Home = ({ pages, socials, categories }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="home">
      <section className="home__top">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {categories.map((CAT, key) => (
            <Carousel.Item key={key}>
              <Slider
                name={CAT.Name}
                desc={CAT.Summary}
                img={`${API}${CAT.Photo.url}`}
                link={CAT.Link}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
      <section className="home__bottom">
        <Footer pages={pages} socials={socials} />
      </section>
    </section>
  );
};

export default Home;
