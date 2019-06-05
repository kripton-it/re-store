// 1 работа с сервисом
const booksLoaded = newBooks => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST"
  };
};

const booksError = error => {
  return {
    type: "FETCH_BOOKS_ERROR",
    payload: error
  };
};

// вынесли логику работы с данными из компонента
// объединяет в себе 3 action creator, и теперь их не надо экспортировать
const fetchBooks = (bookstoreService, dispatch) => () => {
  const { getBooks } = bookstoreService;
  dispatch(booksRequested());

  getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(error => dispatch(booksError(error)));
};

// 2 - работа с корзиной
const bookAddedToCart = (bookId) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookId
  };
};

const allBooksDeletedFromCart = (bookId) => {
  return {
    type: "ALL_BOOKS_DELETED_FROM_CART",
    payload: bookId
  };
};

const bookDeletedFromCart = (bookId) => {
  return {
    type: "BOOK_DELETED_FROM_CART",
    payload: bookId,
  };
};

export { fetchBooks, bookAddedToCart, bookDeletedFromCart, allBooksDeletedFromCart };
