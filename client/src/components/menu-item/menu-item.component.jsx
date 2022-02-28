import React from 'react';
import PropTypes from 'prop-types';
import {useHistory, useRouteMatch} from 'react-router-dom';

import {
  BackgroundImageContainer,
  MenuItemContainer,
  ContentContainer,
  MenuItemTitle,
  MenuItemSubtitle,
} from './menu-item.styles';

export default function MenuItem({ title, imageUrl, size, linkUrl }) {
  const history = useHistory();
  const match = useRouteMatch();

  const handleClick = () => {
    history.push(`${match.url}${linkUrl}`);
  }

  return (
    <MenuItemContainer onClick={handleClick} large={!!size}>
      <BackgroundImageContainer className='background-image' imageUrl={imageUrl}/>
      <ContentContainer className='content'>
        <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
        <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  linkUrl: PropTypes.string.isRequired
}