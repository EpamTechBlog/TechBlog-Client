import React from 'react';
require('../../../styles/article.style.css');
import $ from "jquery";
import cookie from 'react-cookie';


import store from '../../../store.js'


class PostComponent extends React.Component{

  constructor() {
    super();
    this.state = {topics : []};

  }
  componentDidMount(){
    axios.get('http://localhost:8000/topics').then((data) => {
      this.setState({ topics :  data.data});
    }).catch((err) => console.log(err));
  }

  render() {
    let radios = this.state.topics.map((topic) => {
      return (
          <div className="mdl-cell mdl-cell-4-col" key={topic._id}>
            <label><input name='topic' type='radio' value={topic.topicName}
            checked={topic.topicName === 'JAVASCRIPT' ? 'checked' : ''}/>{topic.topicName}</label>
          </div>
           )
    });
    return (
      <div className="articleTitleDiv">

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='articleTitle mdl-textfield mdl-js-textfield'>
            <label>Title</label>
            <input className="mdl-textfield__input" type="text" id="articleTitle" ref='articleTitle' required/>
          </div>
          <div className="mdl-grid">
            {radios}
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
    this.props.asynPostMiddleware(title, text, topic, cookie.load('username'), cookie.load('userId'));
    //this.props.asynGetArticlesByTopicMiddle(topic);
  }
}

export default PostComponent;
