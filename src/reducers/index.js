import updateBookList from './update-book-list';
import updateShoppingCart from './update-shopping-cart';

const reducer = (state, action) => {
  return {
    shoppingCart: updateShoppingCart(state, action),
    bookList: updateBookList(state, action),
  };
};

export default reducer;
