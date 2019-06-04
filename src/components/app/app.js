import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import "./app.css";
import { HomePage, CartPage } from "../pages";

const App = () => {
  return (
    <Switch>
      {/* <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link> */}
      <Route path="/" exact component={HomePage} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
};

export default App;
