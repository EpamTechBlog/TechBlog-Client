'use strict';

const userReducer = (state='signup', action) => {

  switch (action.type) {
    case 'USER_SIGNUP' :
      return 'signup';

    case 'USER_SIGNIN' :
      return 'signin';

    default:
      return state
  }
}

export default userReducer