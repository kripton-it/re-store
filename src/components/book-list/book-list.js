import React, { Component } from "react";
import { connect } from "react-redux";

import "./book-list.css";

import withBookstoreService from "../HOC";
import { booksLoaded, booksRequested, booksError } from "../../actions";
import { compose } from "../../utils";

import BookListItem from "../book-list-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class BookList extends Component {
  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError
    } = this.props;

    const { getBooks } = bookstoreService;

    booksRequested();

    getBooks()
      .then(booksLoaded)
      .catch(booksError);
  }

  render() {
    const { books, isLoading, error } = this.props;

    if (isLoading) return <Spinner />;

    if (error) return <ErrorIndicator />;

    const bookList = books.map(book => (
      <li>
        <BookListItem key={book.id} book={book} />
      </li>
    ));
    return <ul className="book-list">{bookList}</ul>;
  }
}

const mapStateToProps = ({ books, isLoading, error }) => {
  return { books, isLoading, error };
};

const mapDispatchToProps = { booksLoaded, booksRequested, booksError };

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
