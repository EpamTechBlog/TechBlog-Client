'use strict';

function getAllArticles(type,key){
  $.ajax({
    url: '//localhost:8000/articles/'+type+key,
    dataType: 'json',
    cache: false,
    success: function(data) {
      console.log('get data from server',data.articles);
      return articles;
    }.bind(this),
    error: function(xhr, status, err) {
      console.error('err',err.toString());
      return err;
    }.bind(this)
  });
};

function changeState(articles){
  return {
    type: GET_ALL,
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