import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const withSpinner = (WrappedComponent) => ({isLoading, ...otherProps}) => {
  const ConditionComponent = isLoading
  ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );

  return ConditionComponent;
}

export default withSpinner;