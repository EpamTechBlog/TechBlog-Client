import { combineReducers } from 'redux';
import userReducer from '../../user/reducers/user.reducer';
import profileReducer from '../../user/reducers/profile.reducer';

const coreReducer = combineReducers({
  loginOrRegister: userReducer,
  editBaseInfo: profileReducer,
})

export default coreReducer;