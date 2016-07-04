'use strict';
import $ from "jquery";
import store from '../../../store.js';

function addArticle(article) {
  return { type: 'ADD_ARTICLE', article }
}

// function getArticles(articles) {
//   return { type: 'GET_ARTICLES', articles }
// }

function postRequestToServer(title, content, author) {
  return axios.post('http://localhost:8000/articles',
    {
      title,
      content,
      author
    })
}

export function asynPostMiddleware(title, content, author) {
  return function (dispatch) {
    return postRequestToServer(title, content, author).then(
      article => dispatch(addArticle(article))
      //error => dispatch(setVisibilityFilter('POST_ERROR'))
    ).then(() => console.log(store.getState(), 'after'))
    .catch(err => console.log(err));
  };
}


// export function asynGetListMiddleware(topic) {
//   return function(dispatch) {
//     return getRequestToServer(topic).then(
//         articles => {
//           console.log('success in get');
//           dispatch(getArticles(articles));
//           //state.isLoading = false;
//           // /state.articles = articles
//         }
//       ).then(() => console.log(store.getState(), 'after')).catch(err => console.log(err));
//   }
// }

// function getRequestToServer(topic) {
//     return axios.get('http://localhost:8000/articles/topic/' + topic)
// }


// export function setVisibilityFilter(filter) {
//   return { type: 'SET_VISIBILITY_FILTER', filter }
// }


// export function asynPostMiddleware(title, content, author) {
//   return function(dispatch) {
//     return createPromise(title, content, author).then(article => {
//       dispatch(addArticle(article));
//           }
//       ).then(() => {
//         console.log(store.getState(), 'after');
//       })
//     .catch(err => console.log(err));
//   }
// }

// function createPromise(title, content, author) {
//   const promise = new Promise((resolve, reject) => {
//       $.ajax({
//             url: 'http://localhost:8000/articles',
//             dataType: 'json',
//             type: "POST",
//             data: {title, content, author},
//             cache: false,
//             success: function(data) {
//               console.log('success in jquery ajax');
//               resolve(data);
//             },
//             error: function(xhr, status, err) {
//                 reject(err);
//             }
//           });
//   });
//   return promise;
// }
