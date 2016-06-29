'use strict';

export function baseInfoEditing(){
  console.log(1);
  return {
    type: 'BASE_INFO_EDITING'
  }
}

export function baseInfoEdited(){
  console.log(2);
  return {
    type: 'BASE_INFO_EDITED'
  }
}