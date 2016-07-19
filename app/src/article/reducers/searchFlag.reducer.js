'use strict';

const searchFlagReducer = (state={}, action) =>{
  switch(action.type) {
    case 'MODEL_SEARCH':
      return Object.assign({},state,{
        searchFlag : 'search',
        searchResult : action.searchResult
      })
    case 'MODEL_SHOW':
      return Object.assign({},state,{
        searchFlag : 'show',
        searchResult : ''
      })
    default :
      return state;
  }
}

export default searchFlagReducer;