import React from "react";

import CartDropdown from "./cart-dropdown.component";

import {useSelector} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";

const CartDropdownContainer = (props) => {
  const { cartItems } = useSelector(createStructuredSelector({
    cartItems: selectCartItems
  }))

  return <CartDropdown cartItems={cartItems} {...props} />
}

export default CartDropdownContainer;