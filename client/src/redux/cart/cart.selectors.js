import { createSelector } from 'reselect';

//Input Selector
const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => {
    // console.log("Pobieram itemy - wersja reselect")
    return cart.cartItems;
  }
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    // console.log("Obliczam nowa wartosc...");
    return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
  }
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + (cartItem.price * cartItem.quantity), 0)
);