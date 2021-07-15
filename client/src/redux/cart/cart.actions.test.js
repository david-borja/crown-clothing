// import configureStore from "redux-mock-store";

import CartActionTypes from "./cart.types";
import {
  toggleCartIsHidden,
  addItem,
  removeItem,
  clearItemFromCart,
  clearCart,
} from "./cart.actions";

// const middlewares = [];
// const mockStore = configureStore(middlewares);

describe("synchronous cart action creators", () => {
  it("should create an action to toggle cart visibility", () => {
    const expectedAction = {
      type: CartActionTypes.TOGGLE_CART_IS_HIDDEN,
    };
    expect(toggleCartIsHidden()).toEqual(expectedAction);
  });

  it("should create an action to add an item to the cart", () => {
    const item = {
      id: 6,
      name: "Palm Tree Cap",
      imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
      price: 14,
    };
    const expectedAction = {
      type: CartActionTypes.ADD_ITEM,
      payload: item,
    };
    expect(addItem(item)).toEqual(expectedAction);
  });

  // There's no need for using the mockStore here, just practising
  // it("should create an action to add an item to the cart, using mockStore", () => {
  //   const store = mockStore();
  //   const item = {
  //     id: 6,
  //     name: "Palm Tree Cap",
  //     imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
  //     price: 14,
  //   };
  //   store.dispatch(addItem(item));
  //   const actions = store.getActions();
  //   const expectedAction = {
  //     type: CartActionTypes.ADD_ITEM,
  //     payload: item,
  //   };
  //   expect(actions).toEqual([expectedAction]);
  // });

  it("should create an action to remove an item from the cart", () => {
    const item = {
      id: 6,
      name: "Palm Tree Cap",
      imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
      price: 14,
    };
    const expectedAction = {
      type: CartActionTypes.REMOVE_ITEM,
      payload: item,
    };
    expect(removeItem(item)).toEqual(expectedAction);
  });

  it("should create an action to clear an item from the cart", () => {
    const item = {
      id: 6,
      name: "Palm Tree Cap",
      imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
      price: 14,
    };
    const expectedAction = {
      type: CartActionTypes.CLEAR_ITEM_FROM_CART,
      payload: item,
    };
    expect(clearItemFromCart(item)).toEqual(expectedAction);
  });

  it("should create an action to clear the cart", () => {
    const expectedAction = {
      type: CartActionTypes.CLEAR_CART,
    };
    expect(clearCart()).toEqual(expectedAction);
  });
});
