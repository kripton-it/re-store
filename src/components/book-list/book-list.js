import React, { Component } from "react";
import { connect } from "react-redux";

import "./book-list.css";

import withBookstoreService from "../HOC";
import { booksLoaded } from "../../actions";
import { compose } from "../../utils";

import BookListItem from "../book-list-item";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    const { getBooks } = bookstoreService;
    const data = getBooks();
    setTimeout(() => booksLoaded(data), 1000);
  }

  render() {
    const { books } = this.props;
    const bookList = books.map(book => (
      <BookListItem key={book.id} book={book} />
    ));
    return <ul className="book-list">{bookList}</ul>;
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = { booksLoaded };

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
