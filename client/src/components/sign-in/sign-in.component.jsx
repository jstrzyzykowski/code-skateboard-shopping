import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsContainer
} from './sign-in.styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password} = signInData;
    dispatch(emailSignInStart({email, password}));
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setSignInData({
      ...signInData,
      [name]: value,
    });
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" name="email" value={signInData.email} handleChange={handleChange} type="email" required/>
        <FormInput label="Password" name="password" value={signInData.password} handleChange={handleChange} type="password" required/>
        <ButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={() => dispatch(googleSignInStart())} isGoogleSignIn>Sign in with Google</CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
}