import React from 'react'

import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from "../../components/collection-item/collection-item.component";

import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './collection.styles';

export default function CollectionPage({ match }) {
  const { collectionName } = match.params;
  const { collection } = useSelector(createStructuredSelector({
    collection: selectCollection(collectionName)
  }));

  return (
    <CollectionPageContainer>
      <CollectionTitle>{collection.title}</CollectionTitle>
      <CollectionItemsContainer>
        {collection.items.map((collectionItem) => <CollectionItem key={collectionItem.id} item={collectionItem}/>)}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
}