import React from 'react';
import ShowPost from './post.component.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PostList extends React.Component{

  constructor() {
    super();
    this.createPostItem = this.createPostItem.bind(this);
  }

  createPostItem(post){
    return (
        <ShowPost post = {post} key={post.id}/>
    );
  }
  render() {
    console.log('postlist get posts',  this.props.posts);
    let posts;
    if(this.props.posts){
      posts = this.props.posts.map((post)=>{
        return this.createPostItem(post);
      });
    }
    return (
      <div>
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--3dp articleContainer">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Title</th>
              <th className="mdl-data-table__cell--non-numeric">Topic</th>
              <th className="mdl-data-table__header--sorted-descending mdl-data-table__cell--non-numeric">Publish Date</th>
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
    posts: store.articles
  }
}
export default connect(mapStateToProps)(PostList)

// export default PostList;
