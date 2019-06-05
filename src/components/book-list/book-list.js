import React, { Component } from "react";
import { connect } from "react-redux";

import "./book-list.css";

import withBookstoreService from "../HOC";
import { booksLoaded, booksRequested } from "../../actions";
import { compose } from "../../utils";

import BookListItem from "../book-list-item";
import Spinner from "../spinner";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    const { getBooks } = bookstoreService;
    booksRequested();
    getBooks().then(booksLoaded);
  }

  render() {
    const { books, isLoading } = this.props;

    if (isLoading) return <Spinner />;

    const bookList = books.map(book => (
      <li>
        <BookListItem key={book.id} book={book} />
      </li>
    ));
    return <ul className="book-list">{bookList}</ul>;
  }
}

const mapStateToProps = ({ books, isLoading }) => {
  return { books, isLoading };
};

const mapDispatchToProps = { booksLoaded, booksRequested };

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
