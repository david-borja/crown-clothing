import CartActionTypes from "./cart.types";

export const toggleCartIsHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_IS_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})