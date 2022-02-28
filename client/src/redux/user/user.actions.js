import { userTypes } from './user.types';

export function googleSignInStart() {
  return {
    type: userTypes.GOOGLE_SIGN_IN_START,
  }
}

export function signInSuccess(user) {
  return {
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user,
  }
}

export function signInFailure(error) {
  return {
    type: userTypes.SIGN_IN_FAILURE,
    payload: error,
  }
}

export function emailSignInStart(emailAndPassword) {
  return {
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  }
}

export function checkUserSession() {
  return {
    type: userTypes.CHECK_USER_SESSION,
  }
}

export function signOutStart() {
  return {
    type: userTypes.SIGN_OUT_START
  }
}

export function signOutSuccess() {
  return {
    type: userTypes.SIGN_OUT_SUCCESS
  }
}

export function signOutFailure(error) {
  return {
    type: userTypes.SIGN_OUT_FAILURE,
    payload: error,
  }
}

export function signUpStart(userCredentials) {
  return {
    type: userTypes.SIGN_UP_START,
    payload: userCredentials,
  }
}

export function signUpSuccess({user, additionalData}) {
  return {
    type: userTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData},
  }
}

export function signUpFailure(error) {
  return {
    type: userTypes.SIGN_UP_FAILURE,
    payload: error,
  }
}