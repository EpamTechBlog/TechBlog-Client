'use strict';

import { createStore } from 'redux';
import coreReducer from './src/reducers/core.reducer';
export default createStore(coreReducer);