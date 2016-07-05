import React from 'react';
require('../../../styles/article.style.css');
import $ from "jquery";
import cookie from 'react-cookie';


import store from '../../../store.js'


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
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--2-col">
              <label><input name='topic' type='radio' value='JAVA'/>JAVA</label>
            </div>
            <div className="mdl-cell mdl-cell--2-col">
              <label><input name='topic' type='radio' value='PHP'/>PHP</label>
            </div>
            <div className="mdl-cell mdl-cell--2-col">
              <label><input name='topic' type='radio' value='C#'/>C#</label>
            </div>
            <div className="mdl-cell mdl-cell--2-col">
              <label><input name='topic' type='radio' value='JAVASCRIPT'/>JS</label>
            </div>
            <div className="mdl-cell mdl-cell--2-col">
              <label><input name='topic' type='radio' value='C++'/>C++</label>
            </div>
            <div className="mdl-cell mdl-cell--2-col">
              <label><input name='topic' type='radio' value='IOS'/>IOS</label>
            </div>
          </div>


          <textarea className='textarea' ref='articleText'></textarea>
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
    const topic = $('input[name="topic"]:checked').val();
    console.log(store.getState(), 'before');
    console.log(topic, 'topic.1111111');
    console.log(this.props, 'this.props');
    this.props.asynPostMiddleware(title, text, topic, cookie.load('username'));
  }
}

export default PostComponent;
