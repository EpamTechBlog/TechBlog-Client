'use strict';

import { createStore } from 'redux';
import coreReducer from './src/core/reducers/core.reducer';
export default createStore(coreReducer);