import React, { Component } from "react";
import { bindActionCreators } from "redux";
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
    setTimeout(() => booksLoaded(data), 5000);
  }

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

// первый способ - диспатчить action вручную
/*const mapDispatchToProps = dispatch => {
  return {
    booksLoaded: newBooks => {
      dispatch({
        type: "BOOKS_LOADED",
        payload: newBooks
      });
    }
  };
};*/

// второй способ - диспатчить action с помощью action creator
/*const mapDispatchToProps = dispatch => {
  return {
    booksLoaded: newBooks => dispatch(booksLoaded(newBooks))
  };
};*/

// третий способ - диспатчить action с помощью Redux.bindActionCreators
/*const mapDispatchToProps = dispatch =>
  bindActionCreators({ booksLoaded }, dispatch);*/

// 4-ый способ - в качестве mapDispatchToProps передать в connect объект с action creators
const mapDispatchToProps = { booksLoaded };

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
