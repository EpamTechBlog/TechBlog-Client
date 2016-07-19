'use strict';

import store from '../../../store.js';

export function setSearchModel(searchResult){
    return {
      type:'MODEL_SEARCH',
      searchResult,
    }
}

export function setShowModel(){
    return {
      type: 'MODEL_SHOW',
    }
}
