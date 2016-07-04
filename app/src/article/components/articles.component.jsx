'use strict';

import React from 'react';
import PostList from './postList.component.jsx';
import SearchPost from './searchPost.component.jsx';
import $ from "jquery";

require('../../../styles/article.style.css');

class Articles extends React.Component{
  constructor() {
    super();

    // this.state = {
    //   posts: [],
    // };

    this.loadAllPosts = this.loadAllPosts.bind(this);
  }
  //  componentDidMount(){
  //   this.props.getAllArticlesAsyn('topic','DDDD').then(
  //     ()=>{
  //       let posts = this.props.articles;
  //       console.log('Articles posts',posts);
  //       this.setState({posts:posts});
  //     },
  //     (err)=>{
  //       console.log('errrrrrr',err);
  //     }
  //   )
  //   // console.log('Articles!!!!!!', this.props.getAllArticlesAsyn('topic','DDDD'));
  //   // let posts = this.props.articles;
  //   // console.log('Articles posts',posts);
  //   // this.setState({posts:posts});
  // }

  // componentDidMount(){
  //   let posts = this.loadAllPosts(this.props.type, this.props.key);
  //   this.setState({posts:posts});
  // }
  loadAllPosts(type,key){
    $.ajax({
      url: '//localhost:8000/articles/'+type+key,
      dataType: 'json',
      cache: false,
      success: function(data) {
        // console.log('get data from server',data.articles);
        this.setState({posts: data.articles});
      }.bind(this),
      error: function(xhr, status, err) {
        // console.error('err',err.toString());
      }.bind(this)
    });
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