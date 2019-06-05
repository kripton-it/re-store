import React from "react";

import "./book-list.css";

import BookListItem from "../book-list-item";

const BookList = ({ books, onAdd }) => {
  const bookList = books.map(book => (
    <li key={book.id}>
      <BookListItem book={book} onAdd={() => onAdd(book.id)} />
    </li>
  ));
  return <ul className="book-list">{bookList}</ul>;
};

export default BookList;
