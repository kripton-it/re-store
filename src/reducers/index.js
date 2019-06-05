const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [],
  orderTotal: 0
};

const updateCartItems = (items, item, index) => {
  return index >= 0 // если item существует - обновить его
    ? [
        ...items.slice(0, index), // before
        item,
        ...items.slice(index + 1) // after
      ]
    : [...items, item]; // если item не существует - добавить новый в конец массива
};

const updateCartItem = (book, item = {}) => {
  // если item === undefined, to заменится на {}
  // чтобы можно было применить параметры по умолчанию
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;
  return {
    id,
    title,
    count: count + 1,
    total: total + book.price
  };
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
      const bookId = action.payload;
      const { cartItems, books, orderTotal } = state;
      const book = books.find(({ id }) => id === bookId);
      const { price } = book;
      const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
      const item = cartItems[itemIndex];
      const newItem = updateCartItem(book, item);

      return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotal: orderTotal + price
      };

    default:
      return state;
  }
};

export default reducer;
