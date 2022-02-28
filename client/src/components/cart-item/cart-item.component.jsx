import React from 'react';

import { CartItemContainer, ItemImage, DetailsContainer, ItemName, ItemPrice } from './cart-item.styles';

export default function CartItem({ item }) {
  const { name, imageUrl, price, quantity } = item;
  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={name}/>
      <DetailsContainer className='item-details'>
        <ItemName className='name'>{name}</ItemName>
        <ItemPrice className='price'>{`${quantity} x $${price}`}</ItemPrice>
      </DetailsContainer>
    </CartItemContainer>
  );
}