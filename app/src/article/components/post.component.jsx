import React from 'react';

class Post extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
        <tr>
          <td className="mdl-data-table__cell--non-numeric">{this.props.post.title}</td>
          <td className="mdl-data-table__cell--non-numeric">{this.props.post.topic}</td>
          <td className="mdl-data-table__cell--non-numeric">{this.props.post.publishDate}</td>
        </tr>
    )
  }
}

export default Post;