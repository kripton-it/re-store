import React, { Component } from "react";
import { connect } from "react-redux";

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

const mapStateToProps = ({ books }) => {
  return { books };
};

export default connect(mapStateToProps)(BookList);
