'use strict';

const profileReducer = (state=false, action) => {

  switch (action.type) {
    case 'BASE_INFO_EDIT' :
      return true;

    default:
      return state
  }
}

export default profileReducer