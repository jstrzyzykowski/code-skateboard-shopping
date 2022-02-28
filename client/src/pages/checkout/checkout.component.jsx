import React from 'react';

import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  CheckoutHeaderBlock,
  CheckoutTotal,
  CheckoutTestWarning
} from './checkout.styles';

export default function CheckoutPage() {
  const { cartItems, cartTotal } = useSelector(createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
  }));

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <CheckoutHeaderBlock>
          <span>Products</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Description</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Quantity</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Price</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Remove</span>
        </CheckoutHeaderBlock>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
      <CheckoutTotal>TOTAL: ${cartTotal}</CheckoutTotal>
      <CheckoutTestWarning>
        *Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
      </CheckoutTestWarning>
      <StripeCheckoutButton price={cartTotal} />
    </CheckoutPageContainer>
  );
}