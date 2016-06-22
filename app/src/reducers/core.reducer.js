import { combineReducers } from 'redux';
import userReducer from './user.reducer';

const coreReducer = combineReducers({
  userReducer
})

export default coreReducer;