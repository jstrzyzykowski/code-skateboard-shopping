import { cartTypes } from './cart.types';

export function toggleCartHidden() {
  return {
    type: cartTypes.TOGGLE_CART_HIDDEN,
    payload: null,
  }
}

export function addItem(item) {
  return {
    type: cartTypes.ADD_ITEM,
    payload: item,
  }
}

export function removeItem(item) {
  return {
    type: cartTypes.REMOVE_ITEM,
    payload: item,
  }
}

export function removeAllOfType(item) {
  return {
    type: cartTypes.REMOVE_ALL_OF_TYPE,
    payload: item,
  }
}

export function clearCart() {
  return {
    type: cartTypes.CLEAR_CART,
  }
}

export function setCartFromFirebase(cartItems) {
  return {
    type: cartTypes.SET_CART_FROM_FIREBASE,
    payload: cartItems,
  }
}