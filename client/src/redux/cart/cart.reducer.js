import { cartTypes } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const initialState = {
  hidden: true,
  cartItems: [],
}

export default function cartReducer(state = initialState, {type, payload}) {
  switch (type) {
    case cartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      }
    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      }
    case cartTypes.REMOVE_ALL_OF_TYPE:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== payload.id),
      }
    case cartTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      }
    case cartTypes.SET_CART_FROM_FIREBASE:
      return {
        ...state,
        cartItems: payload,
      }
    default:
      return state;
  }
}