import shopReducer from "./shop.reducer";
import ShopActionTypes from "./shop.types";

describe("shopReducer", () => {
  const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined,
  };

  const mockCollections = {
    collectionID1: {
      title: "Hats",
      items: [
        {
          id: 1,
          name: "Brown Brim",
          imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
          price: 25,
        },
        {
          id: 2,
          name: "Blue Beanie",
          imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
          price: 18,
        },
      ],
    },
    collectionID2: {
      title: "Sneakers",
      items: [
        {
          id: 6,
          name: "Nike Brown High Tops",
          imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
          price: 160,
        },
        {
          id: 7,
          name: "Air Jordan Limited",
          imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
          price: 190,
        },
      ],
    },
  };

  it("should return shop reducer initial state", () => {
    expect(shopReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should handle FETCH_COLLECTIONS_START action", () => {
    expect(
      shopReducer(INITIAL_STATE, {
        type: ShopActionTypes.FETCH_COLLECTIONS_START,
      })
    ).toEqual({
      ...INITIAL_STATE,
      isFetching: true,
    });
  });

  it("should handle FETCH_COLLECTIONS_SUCCESS action", () => {
    expect(
      shopReducer(INITIAL_STATE, {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: mockCollections,
      })
    ).toEqual({
      ...INITIAL_STATE,
      collections: mockCollections,
    });
  });

  it("should handle FETCH_COLLECTIONS_FAILURE action", () => {
    expect(
      shopReducer(INITIAL_STATE, {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: "Error 404. Collections Not Found",
      })
    ).toEqual({
      ...INITIAL_STATE,
      errorMessage: "Error 404. Collections Not Found",
    });
  });
});
