import React from 'react';
import { useHistory } from "react-router-dom";

import {useDispatch} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItemsContainer, EmptyMessage, CheckoutButton } from './cart-dropdown.styles';

export default function CartDropdown({ cartItems }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const CartDropdownContentComponent = cartItems.length
    ? cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem}/>)
    : <EmptyMessage>Your cart is empty</EmptyMessage>

  const handleClick = () => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
  }

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {CartDropdownContentComponent}
      </CartItemsContainer>
      <CheckoutButton onClick={handleClick}>GO TO CHECKOUT</CheckoutButton>
    </CartDropdownContainer>
  );
}