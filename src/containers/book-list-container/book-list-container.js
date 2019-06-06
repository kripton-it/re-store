import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import withBookstoreService from "../../components/HOC";
import { fetchBooks, bookAddedToCart } from "../../actions";
import { compose } from "../../utils";

import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-indicator";
import BookList from "../../components/book-list";

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, isLoading, error, onAdd } = this.props;

    if (isLoading) return <Spinner />;

    if (error) return <ErrorIndicator />;

    return <BookList books={books} onAdd={onAdd} />;
  }
}

const mapStateToProps = ({ bookList }) => bookList;

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  /*return {
    // старый синтаксис, без thunkMiddleware
    // fetchBooks: fetchBooks(bookstoreService, dispatch),
    // новый синтаксис, теперь fetchBooks - это actionCreator
    fetchBooks: () => dispatch(fetchBooks(bookstoreService)()),
    onAdd: id => dispatch(bookAddedToCart(id))
  };*/
  // самый крутой вариант
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      // создаст action-функцию, которую обработает thunkMiddleware
      onAdd: bookAddedToCart
      // создаст action-объект
    },
    dispatch
  );
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookListContainer);
