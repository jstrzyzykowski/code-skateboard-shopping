import React from 'react';

import {useDispatch} from "react-redux";
import { addItem, removeAllOfType, removeItem } from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ItemImageContainer,
  ItemImage,
  ItemName,
  ItemQuantity,
  QuantityArrow,
  QuantityValue,
  ItemPrice,
  RemoveButton
} from './checkout-item.styles';

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <CheckoutItemContainer>
      <ItemImageContainer>
        <ItemImage src={imageUrl} alt="item"/>
      </ItemImageContainer>
      <ItemName>{name}</ItemName>
      <ItemQuantity>
        <QuantityArrow onClick={() => dispatch(removeItem(cartItem))}>&#10094;</QuantityArrow>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityArrow onClick={() => dispatch(addItem(cartItem))}>&#10095;</QuantityArrow>
      </ItemQuantity>
      <ItemPrice>{price}</ItemPrice>
      <RemoveButton as='div' onClick={() => dispatch(removeAllOfType(cartItem))}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}