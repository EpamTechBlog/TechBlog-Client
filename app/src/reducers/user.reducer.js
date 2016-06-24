'use strict';

const userReducer = (state={ loginOrRegister : 'login' }, action) => {
  switch (action.type) {
    case 'USER_SIGNUP' :
      return Object.assign({}, state, {
          loginOrRegister: 'signup'
        });
      
    case 'USER_SIGNIN' :
      return Object.assign({}, state, {
          loginOrRegister: 'signin'
        });

    default:
      return state
  }
}

export default userReducer