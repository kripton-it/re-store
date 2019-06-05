import React from "react";

import "./book-list.css";

import BookListItem from "../book-list-item";

const BookList = ({ books }) => {
  const bookList = books.map(book => (
    <li>
      <BookListItem key={book.id} book={book} />
    </li>
  ));
  return <ul className="book-list">{bookList}</ul>;
};

export default BookList;
