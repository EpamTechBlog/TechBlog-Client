'use strict';

export function userSignin(){
  return {
    type: 'USER_SIGNIN'
  }
}

export function userSignup(){
  return {
    type: 'USER_SIGNUP'
  }
}
export function userLogout(text){
  return {
    type: 'USER_LOGOUT',
    text
  }
}
