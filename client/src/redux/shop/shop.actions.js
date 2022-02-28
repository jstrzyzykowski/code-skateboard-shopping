import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from './shop.types';

export const fetchCollectionsStart = () => {
  return {
    type: FETCH_COLLECTIONS_START,
  }
}

export const fetchCollectionsSuccess = (fetchedCollections) => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: fetchedCollections,
  }
}

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  }
}