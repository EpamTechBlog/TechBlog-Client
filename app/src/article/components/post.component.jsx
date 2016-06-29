import React from 'react';
require('../../../styles/article.style.css');
import $ from "jquery";
import cookie from 'react-cookie';



class PostComponent extends React.Component{

  constructor() {
    super();
  }

  render() {
    return (

      <div className="articleTitleDiv">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='articleTitle mdl-textfield mdl-js-textfield'>
            <input className="mdl-textfield__input" type="text" id="articleTitle" ref='articleTitle' required/>
            <label className="mdl-textfield__label" for="articleTitle">Title...</label>
          </div>

          <textarea ref='articleText'></textarea>
          <div className='articlePostButton'>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
             type='submit'>
              Post
            </button>
          </div>
        </form>
      </div>


      )
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.articleTitle.value);
    console.log(this.refs.articleText.value);
    console.log(cookie.load('userId'));

    const title = this.refs.articleTitle.value;
    const text = this.refs.articleText.value;

    $.ajax({
      url: 'http://localhost:8000/articles',
      dataType: 'json',
      type: "POST",
      data: {title : title, text : text, userId : cookie.load('userId')},
      cache: false,
      success: function(data) {

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(error, err.toString());
      }.bind(this)
    });
  }

  // updateText(e) {
  //   console.log(e.target.value);
  // }
}

export default PostComponent;
