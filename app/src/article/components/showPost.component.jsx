import React from 'react';

class ShowPost extends React.Component{
  constructor(){
    super();
  }
  showDate(date){
    var publishDate = new Date(date),
        year = publishDate.getFullYear(),
        month = publishDate.getMonth(),
        day = publishDate.getDate();
    var createdDate = year + "/" + month + "/" + day;
  }
  render(){
    return (
        <tr>
          <td className="mdl-data-table__cell--non-numeric postItem">{this.props.post.title}</td>
          <td className="mdl-data-table__cell--non-numeric postItem">{this.props.post.authorName}</td>
          <td className="mdl-data-table__cell--non-numeric postItem">{this.props.post.publishDate}</td>
        </tr>
    )
  }
}

export default ShowPost;