import React from 'react';

class Post extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
        <tr>
          <td>{this.props.post.title}</td>
          <td>{this.props.post.topic}</td>
          <td>{this.props.post.publishDate}</td>
        </tr>
    )
  }
}

export default Post;