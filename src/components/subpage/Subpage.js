import React from 'react';
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import { Container } from 'react-bootstrap';
import Description from "../description/Description";

const Subpage = ({ subpage, pages, socials }) => {
    return (
        <main className="subpage">
            <Banner element={subpage} />
            <Container>
                <section className="subpage__desc">
                    {subpage.Description ? <Description desc={subpage.Description} /> : ""}
                </section>
            </Container>
            <Footer pages={pages} socials={socials} />
        </main>
    );
}

export default Subpage;