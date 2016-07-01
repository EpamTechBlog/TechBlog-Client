'use strict';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostComponent from '../components/post.component.jsx';
import Articles from '../components/articles.component.jsx';
//import AllArticlesComponent from '../components/articles.component.jsx';
//import ArticleComponent from '../components/article.component.jsx';
//import EditComponent from '../components/edit.component.jsx';

// import the comments component
import * as articleActions from '../actions/article.action.js';

class ContentComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
      return <Articles />
    }
    componentDidMount(){
      console.log('enter ContentComponent componentDidMount');
      this.props.getAllArticlesAsyn('topic','DDDD');
    }
}

const mapStateToProps = (store) => {
  return {
    articleContent: store.articleContent,
    articles: store.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(articleActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent)
