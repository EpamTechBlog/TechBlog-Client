'use strict';
import React from 'react';

class SearchPost extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <form action="#">
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
          <label className="mdl-button mdl-js-button mdl-button--icon" for="sample6">
            <i className="material-icons">search</i>
          </label>
          <div className="mdl-textfield__expandable-holder">
           <label className="mdl-textfield__label" for="sample-expandable">Expandable Input</label>
          </div>
        </div>
      </form>
    );
  }

}

export default SearchPost;