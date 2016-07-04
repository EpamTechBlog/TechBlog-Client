import React from 'react';
require('../../../styles/article.style.css');
import $ from "jquery";
import cookie from 'react-cookie';

import store from '../../../store.js'

// const PostComponent = ({ title }) => (
//   <div>{title}</div>
// );

class PostComponent extends React.Component{

  constructor() {
    super();
  }
  // componentDidMount(){
  //   console.log('in did mount');
  //   this.props.asynGetListMiddleware(this.props.topic);
  // }

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
    const title = this.refs.articleTitle.value;
    const text = this.refs.articleText.value;
    console.log(store.getState(), 'before');
    console.log(this.props, 'this.props.');
    this.props.asynPostMiddleware(title, text, cookie.load('username'));
  }
}

export default PostComponent;
