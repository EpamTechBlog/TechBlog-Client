'use strict';

import React from 'react';
import PostList from './postList.component.jsx';
import SearchPost from './searchPost.component.jsx';
import $ from "jquery";

require('../../../styles/article.style.css');

class Articles extends React.Component{
  constructor() {
    super();

    this.state = {
      posts: [],
    };

    this.loadAllPosts = this.loadAllPosts.bind(this);
  }
  componentDidMount(){
    let posts = this.loadAllPosts();
    this.setState({posts:posts});
  }
  //TODO: change url to this.props.url
  loadAllPosts(){
    $.ajax({
      url: '//localhost:8000/articles/',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log('get data from server',data.articles);
        this.setState({posts: data.articles});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('err',err.toString());
      }.bind(this)
    });
  }

  render() {
    return (
      <div>
        <SearchPost />
        <PostList posts={this.state.posts} />
      </div>
    )
  }
}

export default Articles;