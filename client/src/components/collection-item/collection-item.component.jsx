import React from "react";

import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  ItemImage,
  CollectionFooterContainer,
  Name,
  Price,
  AddButton
} from './collection-item.styles';

export default function CollectionItem({ item }) {
  const { name, imageUrl, price } = item;
  const dispatch = useDispatch();

  return (
    <CollectionItemContainer className='collection-item'>
      <ItemImage className='image' imageUrl={imageUrl}/>
      <CollectionFooterContainer>
        <Name>{ name }</Name>
        <Price>{ price }</Price>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => dispatch(addItem(item))}>Add to cart</AddButton>
    </CollectionItemContainer>
  );
}