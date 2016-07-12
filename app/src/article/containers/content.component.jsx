'use strict';
import React from 'react';
import Articles from '../components/articles.component.jsx';
import PostComponent from '../components/post.component.jsx';

class ContentComponent extends React.Component {
    constructor() {
        super();
    }
    render() {

      if(this.props.topic === 'NEW POST'){
          return (
              <div>
                <PostComponent {...this.props}/>
              </div>
            )
      } else {
          return (
                  <div>
                    <Articles />
                  </div>
                 )
      }
    }
}

export default ContentComponent
