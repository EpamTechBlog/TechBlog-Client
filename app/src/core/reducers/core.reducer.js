import { combineReducers } from 'redux';
import userReducer from '../../user/reducers/user.reducer';
import articleReducer from '../../article/reducers/article.reducer';
import visibilityFilter from '../../article/reducers/visibilityFilter.reducer';

const coreReducer = combineReducers({
  loginOrRegister : userReducer,
  articles : articleReducer,
  visibilityFilter
})

export default coreReducer;