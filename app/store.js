'use strict';

import { createStore,applyMiddleware} from 'redux';
import coreReducer from './src/core/reducers/core.reducer';
import thunk from 'redux-thunk';

export default createStore(
  coreReducer,
  applyMiddleware(thunk)
  );