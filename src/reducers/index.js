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

const updateCartItem = (book, item = {}, action) => {
  // если item === undefined, to заменится на {}
  // чтобы можно было применить параметры по умолчанию
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;
  const multiplier = action === `remove` ? -1 : 1;

  return {
    id,
    title,
    count: count + multiplier,
    total: total + book.price * multiplier
  };
};

const deleteCartItems = (items, index) => [
  ...items.slice(0, index), // before
  ...items.slice(index + 1) // after
];

const reducer = (state = initialState, action) => {
  const { cartItems, books, orderTotal } = state;
  let bookId;
  let book;
  let itemIndex;
  let item;
  let newItem;

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
      bookId = action.payload;
      book = books.find(({ id }) => id === bookId);
      itemIndex = cartItems.findIndex(({ id }) => id === bookId);
      item = cartItems[itemIndex];
      newItem = updateCartItem(book, item, `add`);

      return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotal: orderTotal + book.price
      };

    case "BOOK_DELETED_FROM_CART":
      bookId = action.payload;
      book = books.find(({ id }) => id === bookId);
      itemIndex = cartItems.findIndex(({ id }) => id === bookId);
      item = cartItems[itemIndex];
      newItem = updateCartItem(book, item, `remove`);

      return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotal: orderTotal - book.price
      };

    case "ALL_BOOKS_DELETED_FROM_CART":
      bookId = action.payload;
      itemIndex = cartItems.findIndex(({ id }) => id === bookId);
      item = cartItems[itemIndex];
      const { total: deletedTotal } = item;

      return {
        ...state,
        cartItems: deleteCartItems(cartItems, itemIndex),
        orderTotal: orderTotal - deletedTotal
      };

    default:
      return state;
  }
};

export default reducer;
