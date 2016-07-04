import { combineReducers } from 'redux';
import userReducer from '../../user/reducers/user.reducer';
import profileReducer from '../../user/reducers/profile.reducer';
import articleReducer from '../../article/reducers/article.reducer';
import visibilityFilter from '../../article/reducers/visibilityFilter.reducer';

const coreReducer = combineReducers({
  loginOrRegister: userReducer,
  editBaseInfo: profileReducer,
  articleReducer,
  visibilityFilter
})

export default coreReducer;