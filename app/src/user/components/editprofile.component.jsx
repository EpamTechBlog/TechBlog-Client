import React from 'react';
import $ from "jquery";
import cookie from 'react-cookie';
import { cancelInfoEditing, baseInfoEdited } from '../actions/profile.action';
require('../../../styles/profile.style.css');

class EditProfileComponent extends React.Component{

  constructor() {
    super();
    this.state = { userInfo: {username : '', jobTitle : '', skills : [], articles :　[], profileImage : '', homeAddress : '', email : '', phone : ''},

                 };

  }
  componentDidMount(){

    $.ajax({
            url: 'http://localhost:8000/users/' + cookie.load('userId'),
            dataType: 'json',
            type: "GET",
            cache: false,
            success: function(data) {

              this.setState({ userInfo : data });

            }.bind(this),
            error: function(xhr, status, err) {
              console.error(error, err.toString());
            }.bind(this)
          });
  }

  render() {

    return (
          <div className='profile-content mdl-grid'>
            <div className='mdl-cell mdl-cell--10-col mdl-cell--1-offset'>
              <div className="demo-card-wide mdl-card mdl-shadow--2dp profile-edit-box">

                <div className="profile-edit-div">
                  <label className="profile-edit-label">
                    <img className="profile-Img" src={this.state.userInfo.profileImage ? this.state.userInfo.profileImage : "http://www.bathspa.ac.uk/media/WebProfilePictures/default_profile.jpg"}/>
                  </label>
                  <a href="javascript:;" className="profile-edit-upload">
                    <input type='file' ref='imagefile'/>Click to choose file
                  </a>
                </div>
                <div className="profile-edit-div">
                  <label className="profile-edit-label">
                    Job Title:
                  </label>
                  <input type='text'ref='jobTitle' />
                </div>
                <div className="profile-edit-div">
                  <label className="profile-edit-label">
                    Address:
                  </label>
                  <input type='text'ref='homeAddress' />
                </div>
                <div className="profile-edit-div">
                  <label className="profile-edit-label">
                    Email:
                  </label>
                  <input type='text'ref='email' />
                </div>
                <div className="profile-edit-div">
                  <label className="profile-edit-label">
                    Phone:
                  </label>
                  <input type='text'ref='phone'/>
                </div>
                <div className="profile-edit-div">
                  <label className="profile-edit-label">
                    Skills:
                  </label>
                  <select >
                    <option />
                  </select>
                </div>                
                <div className="profile-edit-div">
                  <label className="profile-edit-label">&nbsp;</label>
                  <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored profile-edit-button" onClick={this.updateProfile.bind(this)}>
                    Update
                  </button>
                  <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect profile-edit-button" onClick={this.props.cancelInfoEditing}>
                    Cancel
                  </button>
                  <button className="display-none" onClick={this.props.baseInfoEdited}>
                    Cancel
                  </button>
                </div>

              </div>
            </div>
          </div>
          )
  }

  updateProfile(){
    var file = this.refs.imagefile.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    var self = this;
    reader.onload = function() {
      console.log(this.result);
        var img = this.result;
         $.ajax({
            url: 'http://localhost:8000/users/' + cookie.load("userId"),
            dataType: 'json',
            type: "PUT",
            data: {profileImage : img},
            cache: false,
            success: function(data) {
              console.log('profile updated successfully');
              $('.display-none').click();
            }.bind(this),
            error: function(xhr, status, err) {

              console.error(error, err.toString());
            }.bind(this)
          });
    }
  }
}
export default EditProfileComponent;
