'use strict';

const SHOW_ALL = 'SHOW_ALL',
const SHOW_EDIT_ARTICLE = 'SHOW_EDIT_ARTICLE',
const SHOW_ONE_ARTICLE = 'SHOW_ONE_ARTICLE'



const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}