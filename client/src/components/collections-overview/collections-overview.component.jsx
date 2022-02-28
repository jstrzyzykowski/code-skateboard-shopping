import React from 'react';

import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import CollectionPreview from "../collection-preview/collection-preview.component";

import { CollectionsOverviewContainer } from './collections-overview.styles';

export default function CollectionsOverview() {

  const { collectionsForPreview } = useSelector(createStructuredSelector({
    collectionsForPreview: selectCollectionsForPreview
  }))

  return (
    <CollectionsOverviewContainer>
      {collectionsForPreview.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps}/>)}
    </CollectionsOverviewContainer>
  );
};