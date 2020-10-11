import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.scss";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Category from "./components/category/Category";
import Product from "./components/product/Product";
import Subpage from "./components/subpage/Subpage";
import MobileMenu from "./components/mobile/MobileMenu";
import Meta from "./components/meta/Meta";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { GETTERS, BASE } from "./utils/api";
import Favicon from "react-favicon";

function App() {
  const [cat, setCat] = useState([]);
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState([]);
  const [socials, setSocials] = useState([]);
  const [contact, setContact] = useState([]);
  const [mobileActive, setMobileActive] = useState(false);

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
      {contact.Favicon ? <Favicon url={contact.Favicon.url} /> : ""}
      {contact ? (
        <Meta
          title={contact.Title}
          description="Strona z pasją do szycia"
          image="image"
          imageAlt="image"
        />
      ) : (
        ""
      )}

      <Router basename="/">
        <ScrollToTop setMobileActive={setMobileActive} />
        <MobileMenu
          categories={cat}
          pages={pages}
          mobileActive={mobileActive}
        />
        <Header
          categories={cat}
          pages={pages}
          mobileActive={mobileActive}
          setMobileActive={setMobileActive}
        />
        <Switch>
          <Route path={`${BASE}/`} exact>
            <Home
              pages={pages}
              socials={socials}
              categories={cat}
              copy={contact.Copyrights}
            />
          </Route>
          {pages.map((page, key) => (
            <Route path={`${BASE}/${page.Link}`} key={key}>
              <Subpage
                subpage={page}
                pages={pages}
                socials={socials}
                pageTitle={contact.Title}
                copy={contact.Copyrights}
              />
            </Route>
          ))}
          {cat.sort(({ id: previousID }, { id: currentID }) => previousID - currentID).map((CAT, key) => (
            <Route path={`${BASE}/category/${CAT.Link}`} key={key}>
              <Category
                category={CAT}
                products={CAT.products}
                pages={pages}
                socials={socials}
                pageTitle={contact.Title}
                copy={contact.Copyrights}
              />
            </Route>
          ))}
          {products.map((product, key) => (
            <Route path={`${BASE}/product/${product.Link}`} key={key}>
              <Product
                product={product}
                pages={pages}
                socials={socials}
                contact={contact}
                pageTitle={contact.Title}
                copy={contact.Copyrights}
              />
            </Route>
          ))}
        </Switch>
      </Router>
    </section>
  );
}

export default App;
