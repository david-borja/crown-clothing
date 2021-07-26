import userReducer from "./user.reducer";
import UserActionTypes from "./user.types";

describe("userReducer", () => {
  const INITIAL_STATE = {
    currentUser: null,
    error: null,
  };

  it("should return initial state", () => {
    expect(userReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  const mockCurrentUser = {
    createdAt: new Date("August 19, 2020 23:15:30"),
    displayName: "John Snow",
    email: "johnsnow@gmail.com",
  };

  // SIGN UP

  it("should handle SIGN_UP_SUCCESS action", () => {
    expect(
      userReducer(INITIAL_STATE, {
        type: UserActionTypes.SIGN_UP_SUCCESS,
        payload: mockCurrentUser,
      })
    ).toEqual({ ...INITIAL_STATE, currentUser: mockCurrentUser });
  });

  it("should handle SIGN_UP_FAILURE action", () => {
    expect(
      userReducer(INITIAL_STATE, {
        type: UserActionTypes.SIGN_UP_FAILURE,
        payload: "Error. Couldn't sign up user ",
      })
    ).toEqual({
      ...INITIAL_STATE,
      error: {
        signUpError: "Error. Couldn't sign up user ",
      },
    });
  });

  // SIGN IN

  it("should handle SIGN_IN_SUCCESS action", () => {
    expect(
      userReducer(INITIAL_STATE, {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: mockCurrentUser,
      })
    ).toEqual({ ...INITIAL_STATE, currentUser: mockCurrentUser });
  });

  it("should handle SIGN_IN_FAILURE action", () => {
    expect(
      userReducer(INITIAL_STATE, {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: "Error. Couldn't sign in user ",
      })
    ).toEqual({
      ...INITIAL_STATE,
      error: { signInError: "Error. Couldn't sign in user " },
    });
  });

  // SIGN OUT

  it("should handle SIGN_OUT_SUCCESS action", () => {
    expect(
      userReducer(
        { ...INITIAL_STATE, currentUser: mockCurrentUser },
        {
          type: UserActionTypes.SIGN_OUT_SUCCESS,
        }
      )
    ).toEqual({ ...INITIAL_STATE, currentUser: null });
  });

  it("should handle SIGN_OUT_FAILURE action", () => {
    expect(
      userReducer(
        { ...INITIAL_STATE, currentUser: mockCurrentUser },
        {
          type: UserActionTypes.SIGN_OUT_FAILURE,
          payload: "Error. Couldn't sign out user ",
        }
      )
    ).toEqual({
      ...INITIAL_STATE,
      currentUser: mockCurrentUser,
      error: { signOutError: "Error. Couldn't sign out user " },
    });
  });
});
