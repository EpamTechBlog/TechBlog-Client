import React from 'react';
require('../../../styles/article.style.css');
class PostComponent extends React.Component{

  constructor() {
    super();
  }

  render() {
    return (

      <div className="articleTitleDiv">
        <form>
          <div className='articleTitle mdl-textfield mdl-js-textfield'>
            <input className="mdl-textfield__input" type="text" id="articleTitle" />
            <label className="mdl-textfield__label" for="articleTitle">Title...</label>

          </div>
          <textarea></textarea>
          <div className='articlePostButton'>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
              Post
            </button>
          </div>
        </form>
      </div>


      )
  }
}

export default PostComponent;
