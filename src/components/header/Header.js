import React from 'react';
import "./header.min.css";
import Nav from "../nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';


const Header = () => {
    return (
        <header className="header">
            <Container>
                <h1>Pościel z Pasją</h1>
                <Nav />
            </Container>
        </header>
    );
}

export default Header;