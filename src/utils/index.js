const compose = (...funcs) => component =>
  funcs.reduceRight((acc, f) => f(acc), component);

const updateState = (bookId, state, countToAdd) => {
  const { books, cartItems, orderTotal } = state;
  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, countToAdd);

  return {
    ...state,
    cartItems: updateItems(cartItems, newItem, itemIndex),
    orderTotal: orderTotal + book.price * countToAdd
  };
};

// универсальная функция для обновления массива
const updateItems = (items, newItem, index) => {
  const { count } = newItem;

  if (index === -1) {
    return [...items, newItem]; // если книги в корзине нет - добавить новый элемент в конец массива
  }

  // если count = 0 - удаляем item из массива
  if (count === 0) {
    return [
      ...items.slice(0, index), // before
      ...items.slice(index + 1) // after
    ];
  }

  // если count != 0 - обновляем item в массиве
  return [
    ...items.slice(0, index), // before
    newItem,
    ...items.slice(index + 1) // after
  ];
};

const updateCartItem = (book, item = {}, countToAdd) => {
  // если item === undefined, to заменится на {}
  // чтобы можно было применить параметры по умолчанию
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;

  return {
    id,
    title,
    count: count + countToAdd,
    total: total + book.price * countToAdd
  };
};

export { compose, updateState };
