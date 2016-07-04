'use strict';

const TopicReducer = (state="Java", action) => {

  switch (action.type) {
    case 'CHANGE_TOPIC' :
      return action.topic;

    default:
      return state
  }

}

export default TopicReducer