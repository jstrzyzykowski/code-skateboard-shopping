import React from 'react';

import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';

import CollectionsOverview from "./collections-overview.component";
import withSpinner from '../with-spinner/with-spinner.component';

const CollectionsOverviewContainer = (props) => {
  const { isLoading } = useSelector(createStructuredSelector({
    isLoading: selectIsCollectionsFetching,
  }))

  const CollectionOverviewWithSpinner = withSpinner(CollectionsOverview);
  return <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />;
}

export default CollectionsOverviewContainer;