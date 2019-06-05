import React, { Component } from "react";
import { connect } from "react-redux";

import withBookstoreService from "../../components/HOC";
import { fetchBooks } from "../../actions";
import { compose } from "../../utils";

import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-indicator";
import BookList from '../../components/book-list';

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, isLoading, error } = this.props;

    if (isLoading) return <Spinner />;

    if (error) return <ErrorIndicator />;

    return <BookList books={books}/>;
  }
}

const mapStateToProps = ({ books, isLoading, error }) => {
  return { books, isLoading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  };
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookListContainer);
