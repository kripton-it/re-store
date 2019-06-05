const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [],
  orderTotal: 180
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 1 - работа с сервисом
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        isLoading: true,
        error: null
      };

    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        isLoading: false,
        error: null
      };

    case "FETCH_BOOKS_ERROR":
      return {
        ...state,
        books: [],
        isLoading: false,
        error: action.payload
      };

    // 2 - работа с корзиной
    case "BOOK_ADDED_TO_CART":
      const { cartItems, books } = state;
      const bookId = action.payload;
      const targetBook = books.find(({ id }) => id === bookId);
      const { title, price } = targetBook;
      const newCartItem = {
        id: bookId,
        name: title,
        count: 1,
        total: price
      };

      return {
        ...state,
        cartItems: [...cartItems, newCartItem]
      };
    default:
      return state;
  }
};

export default reducer;
