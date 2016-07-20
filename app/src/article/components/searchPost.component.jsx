'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../actions/search.action.js';
require('../../../styles/articleList.style.css');

class SearchPost extends React.Component{
  constructor(){
    super();
    this.state = {
      searchContent: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.searchContentAndAuthor = this.searchContentAndAuthor.bind(this);
  }
  componentDitMount(){

  }
  searchContentAndAuthor(value){
    let matchItem = this.props.posts.filter((item)=>{
      return item.topic === this.props.topic
      && (item.title.indexOf(value)>=0
      || item.authorName.indexOf(value)>=0);
    });
    return matchItem;
  }
  handleSearchChange(e){
    this.setState({
      searchContent : e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const content = this.state.searchContent.trim();
    const searchResult = this.searchContentAndAuthor(content);
    this.props.setSearchModel(searchResult);

    this.setState({
      searchContent : '',
    })
  }
  render(){
    return(
     <form onSubmit={this.handleSubmit} className="artiList-container">
       <div className="mdl-textfield mdl-js-textfield artiList-searchDiv">
         <label className="mdl-button mdl-js-button mdl-button--icon artiList-searchIcon" htmlFor="search">
          <i className="material-icons ">search</i>
         </label>
         <div>
           <input
           className="mdl-textfield__input artiList-searchLine"
           type="text"
           id="search"
           value={this.state.searchContent}
           onChange = {this.handleSearchChange}
           />
           <label className="mdl-textfield__label artiList-searchLabel" htmlFor="sample-expandable">Search By Title</label>
         </div>
       </div>
     </form>
    );
  }

}
// export default SearchPost;
const mapStateToProps = (store) => {
  return {
    posts: store.articles,
    topic: store.topic
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators(searchActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPost)
