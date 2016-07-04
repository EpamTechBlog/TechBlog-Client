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
      return (
        <div>
          <Articles />
          <PostComponent />
        </div>
        )
    }
    componentDidMount(){
      console.log('enter ContentComponent componentDidMount');
      this.props.getAllArticlesAsyn('topic','DDDD');
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
