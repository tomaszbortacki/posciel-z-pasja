import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Category from "./components/category/Category";
import Product from "./components/product/Product";
import Subpage from "./components/subpage/Subpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GETTERS } from "./utils/api";

function App() {
  const [cat, setCat] = useState([]);
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState([]);
  const [socials, setSocials] = useState([]);
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
  }, []);

  return (
    <section className="app">
      <Router>
        <Header categories={cat} />
        <Switch>
          <Route path="/" exact>
            <Home pages={pages} socials={socials} categories={cat} />
          </Route>
          {pages.map((page, key) => (
            <Route path={`/${page.Link}`} key={key}>
              <Subpage subpage={page} pages={pages} socials={socials} />
            </Route>
          ))}
          {cat.map((CAT, key) => (
            <Route path={`/${CAT.Link}`} key={key}>
              <Category
                category={CAT}
                products={CAT.products}
                pages={pages}
                socials={socials}
              />
            </Route>
          ))}
          {products.map((product, key) => (
            <Route path={`/${product.Link}`} key={key}>
              <Product product={product} pages={pages} socials={socials} />
            </Route>
          ))}
        </Switch>
      </Router>
    </section>
  );
}

export default App;
