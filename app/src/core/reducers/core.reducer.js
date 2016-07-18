import { combineReducers } from 'redux';
import userReducer from '../../user/reducers/user.reducer';
import profileReducer from '../../user/reducers/profile.reducer';
import articleReducer from '../../article/reducers/article.reducer';
import setArticleTopic from '../../article/reducers/setArticleTopic.reducer';
import searchFlagReducer from '../../article/reducers/searchFlag.reducer';


const coreReducer = combineReducers({

  loginOrRegister: userReducer,
  articles : articleReducer,
  editBaseInfo: profileReducer,
  topic : setArticleTopic,
  search : searchFlagReducer
})

export default coreReducer;
