import { updateState } from "../utils";

const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [],
  orderTotal: 0
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
      return updateState(action.payload, state, 1);

    case "BOOK_DELETED_FROM_CART":
      return updateState(action.payload, state, -1);

    case "ALL_BOOKS_DELETED_FROM_CART":
      const item = state.cartItems.find(({ id }) => id === action.payload);
      return updateState(action.payload, state, -item.count);

    default:
      return state;
  }
};

export default reducer;
