'use strict';
const articleReducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD_ARTICLE' :
      return  [
          ...state,
          action.article
        ]
    case 'GET_TOPIC_ARTICLES' :
      console.log('in get reducer', action.articles);
      return [
        ...state
      ].concat(action.articles)

    default:
      return state
  }
}

export default articleReducer