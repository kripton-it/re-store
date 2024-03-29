import React from "react";

import "./book-list-item.css";

const BookListItem = ({ book, onAdd }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <span className="book-author">{author}</span>
        <span className="book-price">{price}</span>
        <button type="button" className="btn btn-info add-to-cart" onClick={onAdd}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
