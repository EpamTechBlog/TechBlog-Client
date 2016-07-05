import React from 'react';
import NavigationComponent from '../../core/components/navigation.component.jsx';
import SidebarComponent from '../../core/components/sidebar.component.jsx';
import ContentComponent from '../containers/content.component.jsx';
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
      <SidebarComponent />
      </div>

      <div className='articleContent'>
      <ContentComponent />
      </div>

      </div>
      )
  }
}

export default ArticleComponent;
