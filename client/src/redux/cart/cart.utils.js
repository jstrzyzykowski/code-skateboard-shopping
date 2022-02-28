export const addItemToCart = (cartItems, cartItemToAdd) => {
  const isAlreadyInCart = !!(cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id));

  if(isAlreadyInCart) {
    return cartItems.map((cartItem) => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  if(cartItemToRemove.quantity > 1) {
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
    );
  }

  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
}