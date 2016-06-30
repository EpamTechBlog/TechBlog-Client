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

                <div>
                  <img className="profile-Img" src={this.state.userInfo.profileImage ? this.state.userInfo.profileImage : "http://www.bathspa.ac.uk/media/WebProfilePictures/default_profile.jpg"}/>
                  <input type='file' ref='imagefile'/>
                </div>
                <div>
                  <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.updateProfile.bind(this)}>
                    Update
                  </button>
                  <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.props.cancelInfoEditing}>
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
