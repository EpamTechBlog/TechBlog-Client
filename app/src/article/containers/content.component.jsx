'use strict';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostComponent from '../components/post.component.jsx';
import store from '../../../store.js';
import * as articleActions from '../actions/article.action.js';



class ContentComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
      // if (this.props.articleContent === 'allArticles') {
      //   return <AllArticlesComponent {...this.props} />
      // } else if(this.props.articleContent === 'article') {
      //   return <ArticleComponent {...this.props} />
      // } else if(this.props.articleContent === 'post') {
      //   return <PostComponent {...this.props} />
      // } else {
      //   return <EditComponent {...this.props} />
      // }
      return <PostComponent {...this.props} />
    }
}



const mapStateToProps = (store) => {
  return {
    visibilityFilter: store.visibilityFilter,
    articles: store.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(articleActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent)
