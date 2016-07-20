import React from 'react';
import $ from "jquery";
import cookie from 'react-cookie';
import Select2 from 'react-select2-wrapper';
import RadioGroup from 'react-radio';
import 'react-select2-wrapper/css/select2.css';
import { cancelInfoEditing, baseInfoEdited } from '../actions/profile.action';
require('../../../styles/profile.style.css');

class EditProfileComponent extends React.Component{

  constructor() {
    super();
    this.state = { userInfo: {username : '', jobTitle : '', skills : [], articles :　[], profileImage : '', homeAddress : '', email : '', phone : '', subscribed:　'yes'},
                   emailVerify: true, phoneVerify: true
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

  handleChange(e){
    
    this.setState({userInfo : {}});
  }

  commonValidate(e){
    let newState = this.state;
    let targetKey = e.target.name;
    let newValue = e.target.value;
    newState.userInfo[targetKey] = newValue;
    this.setState(newState);
  }

  emailValidate(e){
    let email = e.target.value;
    let newState = this.state;
    newState.userInfo.email = email;
    let reg = /(^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$)|(^$)/;
    if(!reg.test(email)){
      newState.emailVerify = false;
    }else{
      newState.emailVerify = true;
    }

    this.setState(newState);
  }

  phoneValidate(e){
    let phone = e.target.value;
    let newState = this.state;
    newState.userInfo.phone = phone;
    let reg = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    if(!reg.test(phone)){
      newState.phoneVerify = false;
    }else{
      newState.phoneVerify = true;
    }
    this.setState(newState);      
  }

  render() {

    return (
          <div className='profile-content mdl-grid'>
            <div className='mdl-cell mdl-cell--10-col mdl-cell--1-offset'>

              <div className="demo-card-wide mdl-card mdl-shadow--2dp editProfile-box">

                <div className="editProfile-div">
                  <label className="editProfile-label">
                    <img className="editProfile-Img" src={this.state.userInfo.profileImage ? this.state.userInfo.profileImage : "http://www.bathspa.ac.uk/media/WebProfilePictures/default_profile.jpg"}/>
                  </label>
                  <a className="editProfile-upload">
                    <input type='file' ref='imagefile' onChange={this.changeImage.bind(this)}/>Click to choose file
                  </a>
                </div>
                <div className="editProfile-div">
                  <label className="editProfile-label">
                    Job Title:
                  </label>
                  <input type='text' ref='jobTitle' name='jobTitle' onBlur={this.commonValidate.bind(this)} value={this.state.userInfo.jobTitle} onChange={this.handleChange}/>
                </div>
                <div className="editProfile-div">
                  <label className="editProfile-label">
                    Address:
                  </label>
                  <input type='text' ref='homeAddress' name='homeAddress' onBlur={this.commonValidate.bind(this)} value={this.state.userInfo.homeAddress} onChange={this.handleChange}/>
                </div>
                <div className="editProfile-div">
                  <label className="editProfile-label">
                    Email:
                  </label>
                  <input type='email' ref='email' onBlur={this.emailValidate.bind(this)} value={this.state.userInfo.email} onChange={this.handleChange}/>
                </div>
                {(() => {
                  if(!this.state.emailVerify){
                    return (
                      <div>
                        <span className="errMsg editProfile-verify">wrong email format</span>
                      </div>
                    )
                  }
                })()}
                <div className="editProfile-div">
                  <label className="editProfile-label">
                    Phone:
                  </label>
                  <input type='text' ref='phone' onBlur={this.phoneValidate.bind(this)} value={this.state.userInfo.phone} onChange={this.handleChange}/>
                </div>
                {(() => {
                  if(!this.state.phoneVerify){
                    return (
                      <div>
                        <span className="errMsg editProfile-verify">wrong phone format</span>
                      </div>
                    )
                  }
                })()}                
              </div>

              <div className="demo-card-wide mdl-card mdl-shadow--2dp editProfile-box">
                <div className="editProfile-div">
                  <label className="editProfile-label">
                    Skills:
                  </label>
                  <Select2
                    multiple
                    value={this.state.userInfo.skills}
                    id='skills'
                    onChange={this.handleChange}
                    data={['Java', 'C++', 'Javascript', '.Net', 'PHP', 'C#', 'HTML5']}
                    options={
                      {
                        placeholder: 'search by tags',
                      }
                    }
                  />
                </div>
                <div className="editProfile-div">
                  <label className="editProfile-label">
                    Subscription:
                  </label>
                  <RadioGroup className='subscription' name="subscribed" ref='subscribed' onBlur={this.commonValidate.bind(this)} value={this.state.userInfo.subscribed} onChange={this.handleChange}>
                    <input type="radio" value="yes" />Yes
                    <input type="radio" value="no" />No
                  </RadioGroup>
                </div>

                <div className="editProfile-div buttons">
                  <label className="editProfile-label">&nbsp;</label>
                  <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent editProfile-button submit" onClick={this.updateProfile.bind(this)}>
                    Update
                  </button>
                  <button className="mdl-button mdl-js-button mdl-js-ripple-effect editProfile-button" onClick={this.props.cancelInfoEditing}>
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
    if(this.state.emailVerify && this.state.phoneVerify){
      $.ajax({
        url: 'http://localhost:8000/users/' + cookie.load("userId"),
        dataType: 'json',
        type: "PUT",
        data: {jobTitle : this.refs.jobTitle.value, skills : $('#skills').val(), profileImage : this.state.userInfo.profileImage, homeAddress : this.refs.homeAddress.value, email : this.refs.email.value, phone : this.refs.phone.value, subscribed : this.refs.subscribed.value},
        cache: false,
        success: function(data) {
          console.log('profile updated successfully');
          $('.display-none').click();
        }.bind(this),
        error: function(xhr, status, err) {

          console.error(error, err.toString());

        }.bind(this)
      });
    }else{
      alert(`Please input the correct info before update`);
    }

  }
}
export default EditProfileComponent;
