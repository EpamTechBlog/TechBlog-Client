import React from 'react';
import $ from "jquery";
require('../../../styles/profile.style.css');

class EditProfileComponent extends React.Component{

  constructor() {
    super();

  }
  render() {

    return (
          <div className='profile-content mdl-grid'>
            <div className='mdl-cell mdl-cell--10-col mdl-cell--1-offset'>
              <div className="demo-card-wide mdl-card mdl-shadow--2dp profile-edit-box">
                  <div className='profile-edit-field'>
                    <i className="material-icons icons-style">email</i>
                    <div className="mdl-textfield mdl-js-textfield">
                      <input className="mdl-textfield__input" type="text" id="email" />
                      <label className="mdl-textfield__label" htmlfor="email">Email</label>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          )
  }
}
export default EditProfileComponent;
