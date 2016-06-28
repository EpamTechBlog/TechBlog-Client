'use strict';

import React from 'react';
import PostList from './postList.component.jsx';
import SearchPost from './searchPost.component.jsx';

class Articles extends React.Component{
  constructor() {
    super();
    //state init
    this.state = {
      posts: [],
    };
    //function bind
    this.loadAllPosts = this.loadAllPosts.bind(this);
  }
  componentDidMount(){
    let posts = this.loadAllPosts();
    this.setState({posts:posts});
  }
  //TODO: get data from server
  loadAllPosts(){
    let posts = [
      {id:1,title:'AAAA', topic:'AAAAa',publishDate:'2015'},
      {id:2,title:'BBBB', topic:'BBBBa',publishDate:'2016'},
      {id:3,title:'CCCC', topic:'CCCCa',publishDate:'2017'},
    ];
    return posts;
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