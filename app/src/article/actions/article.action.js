'use strict';


/*
 * action types
 */

export const ADD_ARTICLE = 'ADD_ARTICLE'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


/*
 * action creators
 */

export function addArticle(article) {
  return { type: ADD_ARTICLE, article }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}


// function postRequestToServer(title, text, authorId, dispatch) {
//   console.log('in post request');
//   axios.post('http://localhost:8000/articles',
//     {
//       title : title,
//       text : text,
//       userId : authorId
//     }).then((article) => {
//       console.log(article, 'post success')
//       dispatch(postAction(article));
//     }, (error) => {
//       dispatch(errorAction());
//     }
//     ).catch((e) => {
//         console.log(e, 'error!');
//     });
// }

// export function asynPostMiddleware(title, text, authorId) {
//   return function (dispatch) {
//     return postRequestToServer(title, text, authorId, dispatch)
//     .then();
//   }
// }

