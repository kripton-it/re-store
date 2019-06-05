import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./shop-header.css";

const ShopHeader = ({ cartItems, orderTotal }) => {
  const numItems = cartItems.reduce((acc, {count}) => acc + count, 0);
  return (
    <header className="row shop-header">
      <Link className="logo text-dark" to="/">
        ReStore
      </Link>
      <Link className="shopping-cart" to="/cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${orderTotal})
      </Link>
    </header>
  );
};

const mapStateToProps = ({cartItems, orderTotal}) => ({
  cartItems, orderTotal
})

export default connect(mapStateToProps)(ShopHeader);
