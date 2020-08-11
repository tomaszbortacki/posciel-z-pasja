import React, { useState, useEffect } from 'react';
import "./css/app.min.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { CATEGORIES } from "./utils/api";
import {
  BrowserRouter as Router, Switch,
  Route,
} from "react-router-dom";

function App() {
  const [cat, setCat] = useState([]);
  const getCategories = async () => {
    const resp = await fetch(CATEGORIES).then(response => response.json()).then(data => { return data; });
    setCat(resp);
  }
  useEffect(() => {
    getCategories();
  }, [])

  return (
    <section className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/o-nas">
            about
          </Route>
          {cat.map((CAT, key) =>
            <Route path={`/${CAT.Link}`} key={key}>
              {CAT.Name}
            </Route>
          )}
        </Switch>
      </Router>
    </section>
  );
}

export default App;
