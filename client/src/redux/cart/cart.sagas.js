import { takeLatest, call, all, put, select } from 'redux-saga/effects';

import { userTypes } from '../user/user.types';
import { clearCart, setCartFromFirebase } from './cart.actions';
import { getUserCartRef } from "../../firebase/firebase.utils";
import {cartTypes} from "./cart.types";
import {selectCurrentUser} from "../user/user.selectors";
import {selectCartItems} from "./cart.selectors";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* checkCartFromFirebase({ payload: user }) {
  try {
    const cartRef = yield call(getUserCartRef, user.id);
    const cartItems = yield cartRef.get();
    yield put(setCartFromFirebase(cartItems.data().cartItems));
  } catch(error) {
    console.log(error.message);
  }
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if(currentUser) {
    try {
      const userCartRef = yield call(getUserCartRef, currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield userCartRef.update({ cartItems });
    } catch(error) {
      console.log(error.message);
    }
  }
}

export function* watchSignInSuccess() {
  yield takeLatest(userTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* watchCartUpdate() {
  yield takeLatest([
    cartTypes.ADD_ITEM,
    cartTypes.REMOVE_ITEM,
    cartTypes.REMOVE_ALL_OF_TYPE,
  ], updateCartInFirebase);
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(watchSignInSuccess),
    call(watchCartUpdate),
  ]);
}