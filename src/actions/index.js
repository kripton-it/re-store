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

// вынесли логbre работы с данными из компонента
// объединяет в себе 3 action creator, и теперь их не надо экспортировать
const fetchBooks = (bookstoreService, dispatch) => () => {
  const { getBooks } = bookstoreService;
  dispatch(booksRequested());

  getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(error => dispatch(booksError(error)));
};

export { fetchBooks };
