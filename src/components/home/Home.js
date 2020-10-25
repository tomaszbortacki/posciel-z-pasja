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
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          autoplaySpeed: 6000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          autoplaySpeed: 5000,
        }
      },
      {
        breakpoint: 992,
        settings: {
          autoplaySpeed: 4000,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          autoplaySpeed: 3000,
        }
      },
    ]
  };

  return (
    <section className="home">
      <section className="home__top">
        <Slider {...settings}>
          {categories.map((CAT, key) => (
            <Slide
              name={CAT.Name}
              desc={CAT.Summary}
              img={CAT.Cover ? CAT.Cover.url : ""}
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
