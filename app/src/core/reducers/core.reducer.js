import { combineReducers } from 'redux';
import userReducer from '../../user/reducers/user.reducer';
import profileReducer from '../../user/reducers/profile.reducer';
import articleReducer from '../../article/reducers/article.reducer';
import setArticleTopic from '../../article/reducers/setArticleTopic.reducer';

const coreReducer = combineReducers({
  loginOrRegister : userReducer,
  articles : articleReducer,
  editBaseInfo: profileReducer,
  setArticleTopic
})

export default coreReducer;