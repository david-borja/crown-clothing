import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    // This is an attempt to throw an error and pass an error code
    // const error = new Error("Something went wrong");
    // error.code = 400;
    // console.log({ error });
    // throw error;

    const collectionRef = firestore.collection("collections");
    // console.log({ collectionRef });
    const snapshot = yield collectionRef.get();
    // console.log({ snapshot });
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    // console.log({ collectionsMap });
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
