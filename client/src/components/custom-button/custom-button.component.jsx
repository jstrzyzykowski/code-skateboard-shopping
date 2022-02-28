import React from 'react';
import PropTypes from 'prop-types';

import { CustomButtonContainer } from './custom-button.styles';

export default function CustomButton({ children, ...props }) {
  return (
    <CustomButtonContainer {...props}>
      {children}
    </CustomButtonContainer>
  );
}

CustomButton.propTypes = {
  isGoogleSignIn: PropTypes.bool
};