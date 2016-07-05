'use strict';

import store from '../../../store.js';

function addArticle(article) {
  return { type: 'ADD_ARTICLE', article }
}


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


