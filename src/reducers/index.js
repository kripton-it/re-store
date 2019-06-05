const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      name: 'Book 1',
      count: 2,
      total: 100
    },
    {
      id: 2,
      name: 'Book 2',
      count: 1,
      total: 80
    }
  ],
  orderTotal: 180
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        isLoading: true,
        error: null,
      };

    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        isLoading: false,
        error: null,
      };

    case "FETCH_BOOKS_ERROR":
      return {
        ...state,
        books: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
