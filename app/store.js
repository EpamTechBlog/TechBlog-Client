'use strict';

import { createStore } from 'redux';
import coreReducer from './reducers/core.reducer';
export default createStore(coreReducer);