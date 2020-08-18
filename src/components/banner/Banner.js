import React from 'react';
import { Container } from 'react-bootstrap';
import { API } from "../../utils/api";

const Banner = ({ element }) => {
    return (
        <section className="banner">
            {element.Photo ? <figure className="banner--img"><img src={`${API}${element.Photo.url}`} alt={element.Photo.alternativeText} title={element.Photo.alternativeText} /></figure> : ""}
            <Container>
                <h1>{element.Name}</h1>
            </Container>
        </section>
    );
}

export default Banner;