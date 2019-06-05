import React from "react";

import "./book-list-item.css";

const BookListItem = ({ book }) => {
  const { title, author, price, coverImage } = book;
  return (
    <li className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <span className="book-author">{author}</span>
        <span className="book-price">{price}</span>
        <button type="button" className="btn btn-info add-to-cart">
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default BookListItem;
