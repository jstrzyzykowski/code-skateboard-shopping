import React from "react";
import PropTypes from 'prop-types';

import { GroupContainer, GroupFormInput, GroupLabel } from './form-input.styles';

export default function FormInput({ handleChange, label, ...otherProps }) {
  const LabelConditional= label
    ? <GroupLabel className='form-input-label' {...otherProps}>{label}</GroupLabel>
    : null;

  return (
    <GroupContainer>
      <GroupFormInput className='form-input' onChange={handleChange} {...otherProps}/>
      {LabelConditional}
    </GroupContainer>
  );
}

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
}