'use strict';
import React from 'react';
require('../../../styles/article.style.css');

class SearchPost extends React.Component{
  constructor(){
    super();
    this.state = {
      searchContent: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSearchChange(e){
    this.setState({
      searchContent : e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const content = this.state.searchContent.trim();
    //TODO： send data to server

    this.setState({
      searchContent : '',
    })
  }
  render(){
    return(
     <form onSubmit={this.handleSubmit} className="articleContainer">
       <div className="mdl-textfield mdl-js-textfield searchContainer">
         <label className="mdl-button mdl-js-button mdl-button--icon searchIcon" for="search">
          <i className="material-icons ">search</i>
         </label>
         <div>
           <input
           className="mdl-textfield__input searchLine"
           type="text"
           id="search"
           value={this.state.searchContent}
           onChange = {this.handleSearchChange}
           />
           <label className="mdl-textfield__label searchLabel" for="sample-expandable">Search By Title</label>
         </div>
       </div>
     </form>
    );
  }

}

export default SearchPost;