import ShopActionTypes from "./shop.types";
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  fetchCollectionsStartAsync,
} from "./shop.actions";

describe("synchronous shop action creators", () => {
  it("should create an action to start fetching collections", () => {
    const expectedAction = {
      type: ShopActionTypes.FETCH_COLLECTIONS_START,
    };
    expect(fetchCollectionsStart()).toEqual(expectedAction);
  });

  it("should create an action to pass collections fetched successfully", () => {
    const mockCollectionsMap = {
      hats: {
        id: "9qSH0UQrkUmUjWTk6GuM",
        items: {
          0: {
            imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
            id: 1,
            price: 25,
            name: "Brown Brim",
          },
          1: {
            id: 2,
            imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
            name: "Blue Beanie",
            price: 18,
          },
        },
        routeName: "hats",
        title: "Hats",
      },
      jackets: {
        id: "D6DDnm4lBYhV7tLjRYiD",
        items: {
          0: {
            id: 18,
            imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
            name: "Black Jean Shearling",
            price: 125,
          },
          1: {
            id: 19,
            imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
            name: "Blue Jean Jacket",
            price: 90,
          },
        },
        routeName: "jackets",
        title: "Jackets",
      },
    };
    const expectedAction = {
      type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
      payload: mockCollectionsMap,
    };
    expect(fetchCollectionsSuccess(mockCollectionsMap)).toEqual(expectedAction);
  });

  it("should create an action to pass the error message when fetch collections fails", () => {
    const errorMessage = "Error: fetch collections failure";
    const expectedAction = {
      type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
      payload: errorMessage,
    };
    expect(fetchCollectionsFailure(errorMessage)).toEqual(expectedAction);
  });
});

describe("async shop action creators", () => {
  // test fetchCollectionsStartAsync
});
