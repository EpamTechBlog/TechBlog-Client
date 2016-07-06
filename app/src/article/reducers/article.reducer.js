'use strict';
const articleReducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD_ARTICLE' :
      return  [
          ...state,
          action.article
        ]
    case 'GET_TOPIC_ARTICLES' :
      if(action.articles.length === 0){
        return [...state].concat(action.articles)
      } else {
        return [
          ...state
        ].filter((article) => {
          return article.topic !== action.articles[0].topic;
        }).concat(action.articles)
      }


    default:
      return state
  }
}

export default articleReducer