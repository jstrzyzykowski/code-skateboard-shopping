import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectIsCollectionsFetching  = createSelector(
  [selectShop],
  (shop) => shop.isFetching,
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

export const selectCollection = memoize((collectionName) => createSelector(
  [selectCollections],
  (collections) => collections ? collections[collectionName] : null
))

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => collections ? Object.keys(collections).map((key) => collections[key]) : []
);