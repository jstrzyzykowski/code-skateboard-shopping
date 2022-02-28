import React from "react";
import PropTypes from 'prop-types';

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  CollectionPreviewItemsContainer
} from './collection-preview.styles';

export default function CollectionPreview({ title, items }) {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
      <CollectionPreviewItemsContainer>
        {items.filter((item, index) => index < 4).map((item) => <CollectionItem key={item.id} item={item} />)}
      </CollectionPreviewItemsContainer>
    </CollectionPreviewContainer>
  );
}

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number
  }).isRequired).isRequired,
  routeName: PropTypes.string.isRequired
}