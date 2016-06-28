import { combineReducers } from 'redux';
import userReducer from '../../user/reducers/user.reducer';

const coreReducer = combineReducers({
  loginOrRegister: userReducer,
})

export default coreReducer;