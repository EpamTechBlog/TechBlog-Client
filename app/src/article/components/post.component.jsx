import React from 'react';
require('../../../styles/article.style.css');
class PostComponent extends React.Component{

  constructor() {
    super();
  }

  render() {
    return (
        <div className = 'articleContent'>
          <div className="articleTitleDiv">
            <div className='articleTitle mdl-textfield mdl-js-textfield'>
              <input className="mdl-textfield__input" type="text" id="articleTitle" />
              <label className="mdl-textfield__label" for="articleTitle">Title...</label>
            </div>
          </div>

          <div className='articleTitleDiv'>
              <textarea></textarea>

          </div>
        </div>
      )
  }
}

export default PostComponent;
