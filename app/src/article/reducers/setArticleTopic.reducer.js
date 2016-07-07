'use strict';


const setArticleTopic = (state = 'JAVA', action) => {

  switch (action.type) {
    case 'SET_ARTICLE_TOPIC':
      return action.topic
    default:
      return state
  }
}

export default setArticleTopic
