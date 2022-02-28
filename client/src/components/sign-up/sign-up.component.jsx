import React, { useState } from 'react';

import {signUpStart} from "../../redux/user/user.actions";
import {useDispatch} from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

export default function SignUp() {
  const [signUpData, setSignUpData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = signUpData;
    if(password !== confirmPassword) {
      alert('Passwords dont match');
      return;
    }
    dispatch(signUpStart({ displayName, email, password }));
  }

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your emails and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name='displayName'
          type='text'
          value={signUpData.displayName}
          label='Display Name'
          required
        />
        <FormInput
          handleChange={handleChange}
          name='email'
          type='email'
          value={signUpData.email}
          label='Email'
          required
        />
        <FormInput
          handleChange={handleChange}
          name='password'
          type='password'
          value={signUpData.password}
          label='Password'
          required
        />
        <FormInput
          handleChange={handleChange}
          name='confirmPassword'
          type='password'
          value={signUpData.confirmPassword}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
}