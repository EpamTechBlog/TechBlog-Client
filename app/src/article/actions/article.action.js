'use strict';
/*
 * action types
 */
import $ from "jquery";

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
//Article List
function getAllArticles(type,key){
  return new Promise((resolve,reject) =>{
    $.ajax({
      url: '//localhost:8000/articles/'+type+'/'+key,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log('getAllArticles get data from server',data.articles);
        resolve(data.articles);
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('getAllArticles err', err.toString());
        reject(err);
      }.bind(this)
    });
  })
};

function changeState(articles){
  return {
    type: 'GET_ALL',
    articles: articles
  }
}
export function getAllArticlesAsyn(type, key){
  return function(dispatch){
    return getAllArticles(type,key).then(
      articles => changeState(articles),
      err => console.log('err',err)
    );
  }
}
