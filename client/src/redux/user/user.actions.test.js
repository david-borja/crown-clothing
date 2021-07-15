import UserActionTypes from "./user.types";
import * as actions from "./user.actions";

describe("synchronous user action creators", () => {
  it("should create an action to start sign in with Google", () => {
    const expectedAction = { type: UserActionTypes.GOOGLE_SIGN_IN_START };
    expect(actions.googleSignInStart()).toEqual(expectedAction);
  });

  it("should create an action to pass user who signed in successfully", () => {
    const user = {
      currentUser: {
        createdAt: { seconds: 1612616150, nanoseconds: 463000000 },
      },
      displayName: "Bart Simpson",
      email: "bart@test.com",
      id: 12345,
    };
    const expectedAction = {
      type: UserActionTypes.SIGN_IN_SUCCESS,
      payload: user,
    };
    expect(actions.signInSuccess(user)).toEqual(expectedAction);
  });

  it("should create an action to pass an error when there is a sign in failure", () => {
    const error = "Error: Sign In Failure";
    const expectedAction = {
      type: UserActionTypes.SIGN_IN_FAILURE,
      payload: error,
    };
    expect(actions.signInFailure(error)).toEqual(expectedAction);
  });

  it("should create an action to start sign in with email and password", () => {
    const emailAndPassword = {
      email: "bart@test.com",
      password: "thisismypassword",
    };
    const expectedAction = {
      type: UserActionTypes.EMAIL_SIGN_IN_START,
      payload: emailAndPassword,
    };
    expect(actions.emailSignInStart(emailAndPassword)).toEqual(expectedAction);
  });

  it("should create an action to start sign up", () => {
    const userCredentials = {
      email: "bart@test.com",
      password: "thisismypassword",
      displayName: "Bart Simpson",
    };
    const expectedAction = {
      type: UserActionTypes.SIGN_UP_START,
      payload: userCredentials,
    };
    expect(actions.signUpStart(userCredentials)).toEqual(expectedAction);
  });

  it("should create an action to pass user and additional data when signed up successfully", () => {
    const user = {
      email: "bart@test.com",
      password: "thisismypassword",
      displayName: "Bart Simpson",
    };
    const additionalData = { createdAt: "6 February 2021 at 17:11:09 UTC+1" };
    const expectedAction = {
      type: UserActionTypes.SIGN_UP_SUCCESS,
      payload: { user, additionalData },
    };
    expect(actions.signUpSuccess({ user, additionalData })).toEqual(
      expectedAction
    );
  });

  it("should create an action to pass an error when there is a sign up failure", () => {
    const error = "Error: Sign Up Failure";
    const expectedAction = {
      type: UserActionTypes.SIGN_UP_FAILURE,
      payload: error,
    };
    expect(actions.signUpFailure(error)).toEqual(expectedAction);
  });

  it("should create an action to check user session", () => {
    const expectedAction = {
      type: UserActionTypes.CHECK_USER_SESSION,
    };
    expect(actions.checkUserSession()).toEqual(expectedAction);
  });

  it("should create an action to start sign out", () => {
    const expectedAction = {
      type: UserActionTypes.SIGN_OUT_START,
    };
    expect(actions.signOutStart()).toEqual(expectedAction);
  });

  it("should create an action to nofify that the user has signed out successfully", () => {
    const expectedAction = {
      type: UserActionTypes.SIGN_OUT_SUCCESS,
    };
    expect(actions.signOutSuccess()).toEqual(expectedAction);
  });

  it("should create an action to pass an error when there is a sign out failure", () => {
    const error = "Error: Sign Out Failure";
    const expectedAction = {
      type: UserActionTypes.SIGN_OUT_FAILURE,
      payload: error,
    };
    expect(actions.signOutFailure(error)).toEqual(expectedAction);
  });
});
