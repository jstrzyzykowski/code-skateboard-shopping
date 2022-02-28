import React from 'react';

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignInAndSignUpPageContainer } from './sign-in-and-sign-up.styles';

export default function SignInAndSignUp() {
  return (
    <SignInAndSignUpPageContainer>
      <SignIn/>
      <SignUp/>
    </SignInAndSignUpPageContainer>
  );
}