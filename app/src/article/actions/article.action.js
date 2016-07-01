'use strict';
import $ from "jquery";

export function allArticles() {
  return {
    type : 'ALL_ARTICLES'
  }
}

export function article() {
  return {
    type : 'ARTICLE'
  }
}
export function post() {
  return {
    type : 'POST'
  }
}

export function edit() {
  return{
    type : 'EDIT'
  }
}



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

// export function getAllArticlesAsyn(type, key){
//   return function(dispatch){
//     return getAllArticles(type,key).then(
//       articles => changeState(articles),
//       err => console.log('err',err)
//     );
//   }
// }