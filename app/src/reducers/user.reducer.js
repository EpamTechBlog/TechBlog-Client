'use strict';

const userReducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'USER_LOGOUT':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

export default userReducer