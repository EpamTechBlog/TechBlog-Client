'use strict';

import store from '../../../store.js';

function addArticle(article) {
  return { type: 'ADD_ARTICLE', article }
}
function deleteArticle(article) {
  console.log(article)
  return { type : 'DELETE_ARTICLE', article}
}
function getTopicArticles(articles) {
  return { type : 'GET_TOPIC_ARTICLES', articles}
}

export function asynDeleteMiddleware(articleId, topic) {
  return function (dispatch) {
    return deletePostFromServer(articleId).then(
      (article) => {
        deleteCommentFromServer(articleId);
        dispatch(deleteArticle(article))
      }
    ).then(() => {
      getRequestToServer(topic).then((res) => {
        if(res.data.articles.length != 0)
          dispatch(getTopicArticles(res.data.articles));
        dispatch(setArticleTopic(topic));
      });
    })
    .catch(err => console.log(err));
  };
}
function deletePostFromServer(articleId) {
  return axios.delete('http://localhost:8000/articles/' + articleId)
}

function deleteCommentFromServer(articleId) {
  return axios.delete('http://localhost:8000/comments/' + articleId)
}

function postRequestToServer(title, content, topic, authorName, authorId) {
  return axios.post('http://localhost:8000/articles',
    {
      title,
      content,
      topic,
      authorName,
      authorId
    })
}

export function asynPostMiddleware(title, content, topic, author, userId) {
  return function (dispatch) {
    return postRequestToServer(title, content, topic, author, userId).then(
      article => dispatch(addArticle(article))
    ).then(() => {
      getRequestToServer(topic).then((res) => {
        if(res.data.articles.length != 0)
          dispatch(getTopicArticles(res.data.articles));
        dispatch(setArticleTopic(topic));
      });
    })
    .catch(err => console.log(err));
  };
}

function setArticleTopic(topic) {
  return { type: 'SET_ARTICLE_TOPIC', topic }
}

function getRequestToServer(topic) {

  return axios.get('http://localhost:8000/articles' + '/topic/' + topic)
}

export function asynGetArticlesByTopicMiddle (topic) {
  return function (dispatch) {
    return getRequestToServer(topic).then((res) => {
      if(res.data.articles.length != 0)
        dispatch(getTopicArticles(res.data.articles));
      dispatch(setArticleTopic(topic));
    }).then(() => console.log('after choose topic', store.getState()))
    .catch(err => console.log(err));
  }
}

