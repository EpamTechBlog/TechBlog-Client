'use strict';

//import $ from "jquery";
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
   ).then(() => console.log(store.getState(), 'after post'))
   .catch(err => console.log(err));
 };
}

function setArticleTopic(topic) {
 return { type: 'SET_ARTICLE_TOPIC', topic }
}

function getRequestToServer(topic) {
 return axios.get('http://localhost:8000/articles' + topic)
}

export function asynGetArticlesByTopicMiddle (topic) {
 return function (dispatch) {
   return getRequestToServer(topic).then((articles) => {
     dispatch(addArticle(articles));
     dispatch(setArticleTopic(topic));
   }).then(() => console.log(store.getState(), 'after choose topic'))
   .catch(err => console.log(err));
 }
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
//Article List
// function getAllArticles(type,key){
//   return new Promise((resolve,reject) =>{
//     $.ajax({
//       url: '//localhost:8000/articles/'+type+'/'+key,
//       dataType: 'json',
//       cache: false,
//       success: function(data) {
//         console.log('getAllArticles get data from server',data.articles);
//         resolve(data.articles);
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.log('getAllArticles err', err.toString());
//         reject(err);
//       }.bind(this)
//     });
//   })
// };


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