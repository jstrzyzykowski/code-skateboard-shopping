import {takeLatest, call, put, all} from 'redux-saga/effects';

import { FETCH_COLLECTIONS_START } from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.actions";

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch(error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(onFetchCollectionsStart)])
}