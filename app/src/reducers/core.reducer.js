import { combineReducers } from 'redux';
import userReducer from './user.reducer';

const coreReducer = combineReducers({
  loginOrRegister: userReducer,
})

export default coreReducer;