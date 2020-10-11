import React from "react";
import Slide from "../slide/Slide";
import Footer from "../footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ({ pages, socials, categories, copy }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="home">
      <section className="home__top">
        <Slider {...settings}>
          {categories.map((CAT, key) => (
            <Slide
              name={CAT.Name}
              desc={CAT.Summary}
              img={CAT.Photo ? CAT.Photo.url : ""}
              link={CAT.Link}
              key={key}
            />
          ))}
        </Slider>
      </section>
      <section className="home__bottom">
        <Footer pages={pages} socials={socials} copyrights={copy} />
      </section>
    </section>
  );
};

export default Home;
