import React from "react";
import { connect } from "react-redux";
import "./shopping-cart-table.css";

import {
  bookAddedToCart,
  bookDeletedFromCart,
  allBooksDeletedFromCart
} from "../../actions";

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete
}) => {
  const renderRow = (item, index) => {
    const { id, title, count, total } = item;

    return (
      <tr key={id}>
        <td className="id">{index + 1}</td>
        <td className="title">{title}</td>
        <td className="count">{count}</td>
        <td className="price">${total}</td>
        <td className="action">
          <button
            className="btn btn-outline-danger btn-sm float-right"
            onClick={() => onDelete(id)}
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            className="btn btn-outline-success btn-sm float-right"
            onClick={() => onIncrease(id)}
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            className="btn btn-outline-warning btn-sm float-right"
            onClick={() => onDecrease(id)}
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="id">#</th>
            <th className="title">Item</th>
            <th className="count">Count</th>
            <th className="price">Price</th>
            <th className="action">Action</th>
          </tr>
        </thead>

        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onDelete: allBooksDeletedFromCart,
  onDecrease: bookDeletedFromCart,
  onIncrease: bookAddedToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartTable);
