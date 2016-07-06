'use strict';

import store from '../../../store.js';

function addArticle(article) {
  return { type: 'ADD_ARTICLE', article }
}

function getTopicArticles(articles) {
  return { type : 'GET_TOPIC_ARTICLES', articles}
}


function postRequestToServer(title, content, topic, author) {
  return axios.post('http://localhost:8000/articles',
    {
      title,
      content,
      topic,
      author
    })
}

export function asynPostMiddleware(title, content, topic, author) {
  return function (dispatch) {
    return postRequestToServer(title, content, topic, author).then(
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


