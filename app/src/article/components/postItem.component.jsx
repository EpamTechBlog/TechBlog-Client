import React from 'react';
require('../../../styles/articleList.style.css');


class PostItem extends React.Component{
  constructor(){
    super();
  }
  showDate(date){
    var publishDate = new Date(date),
        year = publishDate.getFullYear(),
        month = publishDate.getMonth(),
        day = publishDate.getDate(),
        hour = publishDate.getHours(),
        minute = publishDate.getMinutes();
    var createdDate = month + "/" + day + "/" + year
                      + " " + hour +":"+ minute;
    return createdDate;
  }
  render(){
    return (
        <tr className="artiList-postLine">
          <td className="mdl-data-table__cell--non-numeric artiList-postItem">{this.props.post.title}</td>
          <td className="mdl-data-table__cell--non-numeric artiList-postItem">{this.props.post.authorName}</td>
          <td className="mdl-data-table__cell--non-numeric artiList-postItem">{this.showDate(this.props.post.publishDate)}</td>
          <td className="mdl-data-table__cell--non-numeric artiList-postItem">{this.showDate(this.props.post.publishDate)}</td>
        </tr>
    )
  }
}

export default PostItem;