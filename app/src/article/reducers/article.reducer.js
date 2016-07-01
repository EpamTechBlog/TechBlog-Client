'use strict';

const articleReducer = (state='allArticles', action) => {

  switch (action.type) {
    case 'ALL_ARTICLES' :
      return 'allArticles';
    case 'ARTICLE' :
      return 'article';
    case 'POST' :
      return 'post';
    case 'EDIT' :
      return 'edit';
    default:
      return state
  }
}

export default articleReducer