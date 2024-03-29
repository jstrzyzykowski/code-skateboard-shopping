import React, { useEffect } from 'react';
import { Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from "../collection/collection.container";

export default function ShopPage({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer} />
      <Route
        exact
        path={`${match.path}/:collectionName`}
        component={CollectionPageContainer}/>
    </div>
  );
}