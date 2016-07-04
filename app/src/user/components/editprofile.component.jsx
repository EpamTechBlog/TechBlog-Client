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
                  <a className="profile-edit-upload">
                    <input type='file' ref='imagefile' onChange={this.changeImage.bind(this)}/>Click to choose file
                  </a>
                </div>
                <div className="profile-edit-div">
                  <label className="profile-edit-label">
                    Job Title:
                  </label>
                  <input type='text' ref='jobTitle' value={this.state.userInfo.jobTitle}/>
                </div>
                <div className="profile-edit-div">
                  <label className="profile-edit-label">
                    Address:
                  </label>
                  <input type='text' ref='homeAddress' value={this.state.userInfo.homeAddress}/>
                </div>
                <div className="profile-edit-div">
                  <label className="profile-edit-label">
                    Email:
                  </label>
                  <input type='text' ref='email' value={this.state.userInfo.email}/>
                </div>
                <div className="profile-edit-div">
                  <label className="profile-edit-label">
                    Phone:
                  </label>
                  <input type='text' ref='phone' value={this.state.userInfo.phone}/>
                </div>
                <div className="profile-edit-div">
                  <label className="profile-edit-label">
                    Skills:
                  </label>
                  <select multiple="multiple" id='skills' value={this.state.userInfo.skills}>
                    <option value ="Java">Java</option>
                    <option value ="C++">C++</option>
                    <option value="Javascript">Javascript</option>
                    <option value=".Net">.Net</option>
                  </select>
                </div>                
                <div className="profile-edit-div">
                  <label className="profile-edit-label">&nbsp;</label>
                  <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored profile-edit-button submit" onClick={this.updateProfile.bind(this)}>
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

  changeImage(){

    $('.submit').attr('disabled', 'disabled');
    var file = this.refs.imagefile.files[0];
    var reader = new FileReader();
    if(file){
      reader.readAsDataURL(file);
      var self = this;
    }
    reader.onload = function() {
      var userInfo = self.state.userInfo;
      userInfo.profileImage = this.result;
      self.setState({userInfo : userInfo});
      setTimeout(function(){$('.submit').removeAttr('disabled')},1000);
    }
  }

  updateProfile(){
        
     $.ajax({
        url: 'http://localhost:8000/users/' + cookie.load("userId"),
        dataType: 'json',
        type: "PUT",
        data: {jobTitle : this.refs.jobTitle.value, skills : $('#skills').val(), profileImage : this.state.userInfo.profileImage, homeAddress : this.refs.homeAddress.value, email : this.refs.email.value, phone : this.refs.phone.value},
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
export default EditProfileComponent;
