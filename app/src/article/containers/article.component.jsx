import React from 'react';
import NavigationComponent from '../../core/components/navigation.component.jsx';
import SidebarComponent from '../../core/components/sidebar.component.jsx';
import ContentComponent from '../containers/content.component.jsx';
import * as articleActions from '../actions/article.action.js';

require('../../../styles/article.style.css');

class ArticleComponent extends React.Component{

  constructor() {
    super();
  }

  render() {
    return (
        <div>
          <div className='frame'>
            <NavigationComponent />
            <SidebarComponent {...this.props}/>
          </div>

          <div className='articleContent'>
            <ContentComponent />
          </div>

        </div>
      )
  }
}

const mapStateToProps = (store) => {
  return {
    setArticleTopic: store.setArticleTopic,
    articles: store.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(articleActions, dispatch)
}

export default ArticleComponent;
