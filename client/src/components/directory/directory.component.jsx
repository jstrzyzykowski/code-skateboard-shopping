import React from 'react';

import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';

export default function Directory() {
  const { sections } = useSelector(createStructuredSelector({
    sections: selectSections
  }))

  return (
    <DirectoryMenuContainer>
      {sections.map(({id, ...otherSectionParams}) => <MenuItem key={id} {...otherSectionParams}/>)}
    </DirectoryMenuContainer>
  );
}