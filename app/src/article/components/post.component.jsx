import React from 'react';
require('../../../styles/article.style.css');
import $ from "jquery";
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import TinyMCE from 'react-tinymce';

import store from '../../../store.js'


class PostComponent extends React.Component{

  constructor() {
    super();
    this.state = {topics : []};

  }
  componentDidMount(){
    componentHandler.upgradeDom();
    axios.get('http://localhost:8000/topics').then((data) => {
      this.setState({ topics :  data.data});
    }).catch((err) => console.log(err));
  }

  render() {
    let radios = this.state.topics.map((topic) => {
      return (
          <div className="mdl-cell mdl-cell-4-col" key={topic._id}>
            <label><input name='topic' type='radio' value={topic.topicName}/>{topic.topicName}</label>
          </div>
           )
    });
    return (
      <div className="articleTitleDiv">

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='articleTitle mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <label className="mdl-textfield__label" htmlfor="articleTitle">Blog Title</label>
            <input className="mdl-textfield__input" type="text" id="articleTitle" ref='articleTitle' required/>
          </div>
          <div className="mdl-grid">
            {radios}
          </div>
          <div className="textarea-post forpost">
          <TinyMCE
          config={{
            menubar: false,
            plugins: ['advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
                      'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
                      'save table contextmenu directionality emoticons template paste textcolor'],
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | forecolor backcolor emoticons'
          }}
          onChange={this.handleEditorChange}
          />
          </div>

          <div className='articlePostButton'>
            <input className="common-button" type="submit" value="Post" />
          </div>
        </form>
      </div>


      )
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!cookie.load('username')){
      hashHistory.push('/');
      return;
    }
    const title = this.refs.articleTitle.value;
    const text = tinymce.activeEditor.getContent();
    const topic = $('input[name="topic"]:checked').val();
    this.props.asynPostMiddleware(title, text, topic, cookie.load('username'), cookie.load('userId'), cookie.load('email'), cookie.load('subscribed'));

  }
}

export default PostComponent;
