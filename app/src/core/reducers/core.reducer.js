import { combineReducers } from 'redux';
import userReducer from '../../user/reducers/user.reducer';
import articleReducer from '../../article/reducers/article.reducer';

const coreReducer = combineReducers({
  loginOrRegister : userReducer,
  articleContent : articleReducer
})

export default coreReducer;