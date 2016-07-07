import React from 'react';
import NavigationComponent from '../../core/components/navigation.component.jsx';
import SidebarComponent from '../../core/components/sidebar.component.jsx';
import * as articleActions from '../actions/article.action.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

require('../../../styles/article.style.css');

class SelectedArticleComponent extends React.Component{

  constructor() {
    super();
  }
  componentDidMount(){

  }

  render() {
    return (
      <div>
        <div className='frame'>
          <NavigationComponent />
          <SidebarComponent {...this.props}/>
        </div>

        <div className='articleContent'>
          <p>123123</p>
        </div>
      </div>
      )
  }
}


const mapStateToProps = (store) => {
  return {
    topic: store.topic,
    articles: store.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(articleActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedArticleComponent)


