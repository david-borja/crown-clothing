import CartActionTypes from "./cart.types";
import cartReducer from "./cart.reducer";

describe("cartReducer", () => {
  const INITIAL_STATE = {
    isHidden: true,
    cartItems: [],
  };

  it("should return cart inital state", () => {
    expect(cartReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should handle TOGGLE_CART_IS_HIDDEN action", () => {
    expect(
      cartReducer(INITIAL_STATE, {
        type: CartActionTypes.TOGGLE_CART_IS_HIDDEN,
      })
    ).toEqual({
      ...INITIAL_STATE,
      isHidden: !INITIAL_STATE.isHidden,
    });
  });

  it("should handle ADD_ITEM action", () => {
    expect(
      cartReducer(INITIAL_STATE, {
        type: CartActionTypes.ADD_ITEM,
        payload: {
          id: 6,
          name: "Palm Tree Cap",
          imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
          price: 14,
        },
      })
    ).toEqual({
      ...INITIAL_STATE,
      cartItems: [
        {
          id: 6,
          name: "Palm Tree Cap",
          imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
          price: 14,
          quantity: 1,
        },
      ],
    });
  });

  // Is this test necessary? Does this mean there should be a separate action that handles this case?
  it("should handle ADD_ITEM action when item already exists in the cart", () => {
    expect(
      cartReducer(
        {
          ...INITIAL_STATE,
          cartItems: [
            {
              id: 6,
              name: "Palm Tree Cap",
              imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
              price: 14,
              quantity: 2,
            },
          ],
        },
        {
          type: CartActionTypes.ADD_ITEM,
          payload: {
            id: 6,
            name: "Palm Tree Cap",
            imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
            price: 14,
          },
        }
      )
    ).toEqual({
      ...INITIAL_STATE,
      cartItems: [
        {
          id: 6,
          name: "Palm Tree Cap",
          imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
          price: 14,
          quantity: 3,
        },
      ],
    });
  });

  it("should handle REMOVE_ITEM action", () => {
    expect(
      cartReducer(
        {
          ...INITIAL_STATE,
          cartItems: [
            {
              id: 6,
              name: "Palm Tree Cap",
              imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
              price: 14,
              quantity: 2,
            },
            {
              id: 3,
              name: "Black Converse",
              imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
              price: 110,
              quantity: 1,
            },
          ],
        },
        {
          type: CartActionTypes.REMOVE_ITEM,
          payload: {
            id: 6,
            name: "Palm Tree Cap",
            imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
            price: 14,
          },
        }
      )
    ).toEqual({
      ...INITIAL_STATE,
      cartItems: [
        {
          id: 6,
          name: "Palm Tree Cap",
          imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
          price: 14,
          quantity: 1,
        },
        {
          id: 3,
          name: "Black Converse",
          imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
          price: 110,
          quantity: 1,
        },
      ],
    });
  });

  it("should handle CLEAR_ITEM_FROM_CART action", () => {
    expect(
      cartReducer(
        {
          ...INITIAL_STATE,
          cartItems: [
            {
              id: 6,
              name: "Palm Tree Cap",
              imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
              price: 14,
              quantity: 2,
            },
            {
              id: 3,
              name: "Black Converse",
              imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
              price: 110,
              quantity: 1,
            },
          ],
        },
        {
          type: CartActionTypes.CLEAR_ITEM_FROM_CART,
          payload: {
            id: 6,
            name: "Palm Tree Cap",
            imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
            price: 14,
          },
        }
      )
    ).toEqual({
      ...INITIAL_STATE,
      cartItems: [
        {
          id: 3,
          name: "Black Converse",
          imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
          price: 110,
          quantity: 1,
        },
      ],
    });
  });

  it("should handle CLEAR_CART action", () => {
    expect(
      cartReducer(
        {
          ...INITIAL_STATE,
          cartItems: [
            {
              id: 6,
              name: "Palm Tree Cap",
              imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
              price: 14,
              quantity: 2,
            },
            {
              id: 3,
              name: "Black Converse",
              imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
              price: 110,
              quantity: 1,
            },
          ],
        },
        {
          type: CartActionTypes.CLEAR_CART,
        }
      )
    ).toEqual({
      ...INITIAL_STATE,
      cartItems: [],
    });
  });

  const mockCartFromFirebase = [
    {
      id: 4,
      name: "Nike White AirForce",
      imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
      price: 160,
      quantity: 1,
    },
    {
      id: 3,
      name: "Black & White Longsleeve",
      imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
      price: 25,
      quantity: 2,
    },
  ];

  it("should handle SET_CART_FROM_FIREBASE", () => {
    expect(
      cartReducer(INITIAL_STATE, {
        type: CartActionTypes.SET_CART_FROM_FIREBASE,
        payload: mockCartFromFirebase,
      })
    ).toEqual({
      ...INITIAL_STATE,
      cartItems: mockCartFromFirebase,
    });
  });
});
