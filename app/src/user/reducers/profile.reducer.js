'use strict';

const profileReducer = (state=false, action) => {

  switch (action.type) {
    case 'BASE_INFO_EDITING' :
      return true;

    case 'BASE_INFO_EDITED' :
      return false;

    default:
      return state
  }
}

export default profileReducer