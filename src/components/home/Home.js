import React, { useState, useEffect } from 'react';
import { API, CATEGORIES } from "../../utils/api";
import "./home.min.css";
import Slider from "../slider/Slider";
import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
    const [cat, setCat] = useState([]);
    const getCategories = async () => {
        const resp = await fetch(CATEGORIES).then(response => response.json()).then(data => { return data; });
        setCat(resp);
    }
    useEffect(() => {
        getCategories();
    }, [])

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section className="home">
            <section className="home__top">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {cat.map((CAT, key) =>
                        <Carousel.Item key={key}>
                            <Slider name={CAT.Name} desc={CAT.Description} img={`${API}${CAT.Photo.url}`} link={CAT.Link} />
                        </Carousel.Item>
                    )}
                </Carousel>
            </section>
            <section className="home__bottom">
                footer
            </section>
        </section>
    );
}

export default Home;