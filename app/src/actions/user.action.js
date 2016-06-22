'use strict';

export function userSignin(text){
  return {
    type: 'USER_SIGNIN',
    text
  }
}

export function userSignup(text){
  return {
    type: 'USER_SIGNUP',
    text
  }
}
export function userLogout(text){
  return {
    type: 'USER_LOGOUT',
    text
  }
}