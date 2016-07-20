'use strict';

import React from 'react';
import PostList from './postList.component.jsx';
import SearchPost from './searchPost.component.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../actions/search.action.js';
import $ from "jquery";

require('../../../styles/article.style.css');

class Articles extends React.Component{
  constructor() {
    super();
  }
  componentDidMount(){
    this.props.setShowModel();
  }

  render() {
    return (
      <div>
        <SearchPost />
        <PostList/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators(searchActions,dispatch)
}

export default connect(null, mapDispatchToProps)(Articles);
