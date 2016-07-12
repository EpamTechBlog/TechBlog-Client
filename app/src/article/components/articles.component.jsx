'use strict';
import React from 'react';
import PostList from './postList.component.jsx';
import SearchPost from './searchPost.component.jsx';
import $ from "jquery";

class Articles extends React.Component{
  constructor() {
    super();
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



export default Articles;