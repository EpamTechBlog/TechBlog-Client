import React from 'react';
import Post from './post.component.jsx';

class PostList extends React.Component{

  constructor() {
    super();

    // this.createPostItem = this.createPostItem.bind(this);
  }

  // createPostItem(post){
  //   return <Post title = {post.title} key={post.id}/>
  // }

  render() {
    let posts = this.props.posts.map((post)=>{
      return (
        <Post post = {post} key={post.id}/>
      );
    });
    return (
      <div>
        <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
          <thead>
            <tr>
              <th>Title</th>
              <th>Topic</th>
              <th>Publish Date</th>
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

export default PostList;
