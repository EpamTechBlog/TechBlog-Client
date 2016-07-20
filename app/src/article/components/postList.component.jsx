import React from 'react';
import PostItem from './postItem.component.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
require('../../../styles/articleList.style.css');

class PostList extends React.Component{

  constructor() {
    super();
    this.createPostItem = this.createPostItem.bind(this);
  }

  createPostItem(post){
    return (
        <PostItem post={post} key={post._id}/>
    );
  }
  render() {
    let posts;

    if(this.props.search.searchFlag == 'search'){
      posts = this.props.search.searchResult
      .map((post)=>{
        return this.createPostItem(post);
      });;
      console.log('enter search',posts);
    } else {
       if(this.props.posts.length !== 0){
        posts = this.props.posts
        .filter((post)=>{
          return post.topic === this.props.topic;
        })
        .map((post)=>{
          return this.createPostItem(post);
        });
      }
    }

    return (
      <div>
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--3dp  artiList-container artiList-table">
          <thead>
            <tr  className="artiList-title">
              <th className="mdl-data-table__cell--non-numeric artiList-postItem">Title</th>
              <th className="mdl-data-table__cell--non-numeric artiList-postItem">Author</th>
              <th className="mdl-data-table__cell--non-numeric artiList-postItem">Publish Date</th>
            </tr>
          </thead>
          <tbody>
            {posts}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    posts: store.articles,
    topic: store.topic,
    search : store.search
  }
}
export default connect(mapStateToProps, null)(PostList)
