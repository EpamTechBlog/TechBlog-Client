import React from 'react';
import ShowPost from './showPost.component.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PostList extends React.Component{

  constructor() {
    super();
    this.createPostItem = this.createPostItem.bind(this);
  }

  createPostItem(post){
    console.log('in create post',post);
    return (
        <ShowPost post={post} key={post._id}/>
    );
  }
  render() {
    let posts;
    if(this.props.posts.length !== 0){
      posts = this.props.posts
      .filter((post)=>{
        return post.topic === this.props.topic;
      })
      .map((post)=>{
        return this.createPostItem(post);
      });
    }

    return (
      <div>
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--3dp articleContainer">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric postItem">Title</th>
              <th className="mdl-data-table__cell--non-numeric postItem">Topic</th>
              <th className="mdl-data-table__header--sorted-descending mdl-data-table__cell--non-numeric postItem">Publish Date</th>
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
    topic: store.topic
  }
}
export default connect(mapStateToProps, null)(PostList)
