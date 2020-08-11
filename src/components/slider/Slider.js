import React from 'react';
import "./slider.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Slider = ({ name, desc, img, link }) => {
    return (
        <article className="slider">
            {img.length > 0 ? <figure className="slider__img">
                <img src={img} alt={name} title={name} />
            </figure> : ""}

            <Container>
                <h1>{name}</h1>
                <p>{desc}</p>
                <Link to={link} className="link" title={name} alt={name}>Zobacz więcej</Link>
            </Container>
        </article>
    );
}

export default Slider;