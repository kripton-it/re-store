import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import "./app.css";
import { HomePage, CartPage } from "../pages";
import ShopHeader from "../shop-header";

const App = () => {
  return (
    <main role="main" className="container">
    <ShopHeader numItems={5} total={100} />
      <Switch>
        {/* <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link> */}
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;
