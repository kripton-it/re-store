const updateBookList = (state = {}, action) => {
  const {
    bookList = {
      books: [],
      isLoading: true,
      error: null
    }
  } = state;
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return { books: [], isLoading: true, error: null };

    case "FETCH_BOOKS_SUCCESS":
      return { books: action.payload, isLoading: false, error: null };

    case "FETCH_BOOKS_ERROR":
      return { books: [], isLoading: false, error: action.payload };
    default:
      return bookList;
  }
};

export default updateBookList;
