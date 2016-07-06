'use strict';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostComponent from '../components/post.component.jsx';
import Articles from '../components/articles.component.jsx';
import * as articleActions from '../actions/article.action.js';

class ContentComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
      return (
        <div>
          <Articles />
          <PostComponent />
        </div>
        )
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
