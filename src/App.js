import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Category from "./components/category/Category";
import Product from "./components/product/Product";
import Subpage from "./components/subpage/Subpage";
import Meta from "./components/meta/Meta";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GETTERS, BASE } from "./utils/api";

function App() {
  const [cat, setCat] = useState([]);
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState([]);
  const [socials, setSocials] = useState([]);
  const [contact, setContact] = useState([]);
  const getData = (LINK, SETTER) => {
    fetch(LINK)
      .then((response) => response.json())
      .then((data) => SETTER(data));
  };

  useEffect(() => {
    getData(GETTERS.categories, setCat);
    getData(GETTERS.products, setProducts);
    getData(GETTERS.pages, setPages);
    getData(GETTERS.socials, setSocials);
    getData(GETTERS.contact, setContact);
  }, []);

  return (
    <section className="app">
      <Meta title={contact.Title} />
      <Router>
        <Header categories={cat} />
        <Switch>
          <Route path={`${BASE}/`} exact>
            <Home pages={pages} socials={socials} categories={cat} />
          </Route>
          {pages.map((page, key) => (
            <Route path={`${BASE}/${page.Link}`} key={key}>
              <Subpage
                subpage={page}
                pages={pages}
                socials={socials}
                pageTitle={contact.Title}
              />
            </Route>
          ))}
          {cat.map((CAT, key) => (
            <Route path={`${BASE}/${CAT.Link}`} key={key}>
              <Category
                category={CAT}
                products={CAT.products}
                pages={pages}
                socials={socials}
                pageTitle={contact.Title}
              />
            </Route>
          ))}
          {products.map((product, key) => (
            <Route path={`${BASE}/${product.Link}`} key={key}>
              <Product
                product={product}
                pages={pages}
                socials={socials}
                contact={contact}
                pageTitle={contact.Title}
              />
            </Route>
          ))}
        </Switch>
      </Router>
    </section>
  );
}

export default App;
