import React, { Component } from "react";

import "./book-list.css";
import BookListItem from "../book-list-item";

class BookList extends Component {
  render() {
    const { books } = this.props;
    const bookList = books.map(book => (
      <BookListItem key={book.id} book={book} />
    ));
    return <ul>{bookList}</ul>;
  }
}

export default BookList;
