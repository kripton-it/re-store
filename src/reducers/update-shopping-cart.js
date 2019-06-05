import { updateCart } from "../utils";

const updateShoppingCart = (state = {}, action) => {
  const {
    shoppingCart = {
      cartItems: [],
      orderTotal: 0
    }
  } = state;
  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return updateCart(action.payload, state, 1);

    case "BOOK_DELETED_FROM_CART":
      return updateCart(action.payload, state, -1);

    case "ALL_BOOKS_DELETED_FROM_CART":
      const item = shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateCart(action.payload, state, -item.count);

    default:
      return shoppingCart;
  }
};

export default updateShoppingCart;
