import React from 'react';
import Nav from "../nav/Nav";

const MobileMenu = ({ categories }) => {
    return (
        <section className="mobile-menu">
            <Nav categories={categories} />
        </section>
    );
}

export default MobileMenu;