import React from 'react';
import "./nav.min.css";
import { Link } from "react-router-dom";

const NAV = [
    {
        url: "/",
        name: "Strona główna",
    }, {
        url: "/o-nas",
        name: "O nas",
    }
]

const Nav = () => {
    return (
        <nav className="nav">
            {NAV.map((page, key) =>
                <Link to={page.url} className="link" title={page.name} alt={page.name} key={key}>{page.name}</Link>
            )}
        </nav>
    );
}

export default Nav;