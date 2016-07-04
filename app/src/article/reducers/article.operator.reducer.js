'use strict';

const articleOperatorReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL' :
      return Object.assign({}, state, {
        articles: action.articles
      });
    default:
      return state
  }
}

export default articleOperatorReducer