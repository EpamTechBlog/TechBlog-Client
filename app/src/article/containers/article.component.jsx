import React from 'react';
import NavigationComponent from '../../core/components/navigation.component.jsx';
import SidebarComponent from '../../core/components/sidebar.component.jsx';
import ContentComponent from '../containers/content.component.jsx';

class ArticleComponent extends React.Component{

  constructor() {
    super();
  }

  render() {
    return (
        <div>
          <NavigationComponent />
          <SidebarComponent />
          <ContentComponent />
        </div>
      )
  }
}

export default ArticleComponent;
