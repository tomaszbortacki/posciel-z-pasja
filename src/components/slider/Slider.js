import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LANG from "../../utils/dictionary";

const Slider = ({ name, desc, img, link }) => {

    const Lang = LANG["pl"];

    if (desc && desc.length > 120) desc = desc.substring(0, 120) + "...";

    return (
        <article className="slider">
            {img.length > 0 ? <figure className="slider__img">
                <img src={img} alt={name} title={name} />
            </figure> : ""}

            <Container>
                <h1>{name}</h1>
                {desc ? <p>{desc}</p> : ""}
                <Link to={link} className="link" title={name} alt={name}>{Lang.seeMore}</Link>
            </Container>
        </article>
    );
}

export default Slider;