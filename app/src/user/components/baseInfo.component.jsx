import React from 'react';
import { baseInfoEdit } from '../actions/profile.action';
import cookie from 'react-cookie';
import $ from "jquery";
require('../../../styles/index.style.css');

class BaseInfoComponent extends React.Component{

  constructor() {
    super();
    this.state = { userInfo: {username : '', jobTitle : '', skills : [], articles :　[], profileImage : '', homeAddress : ''} };
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
              <div className="demo-card-wide mdl-card mdl-shadow--2dp profile-container profile-baseInfo">
                <div className="mdl-card__title">

                </div>
                <div className="mdl-card__supporting-text mdl-grid">
                  <div className="mdl-cell--4-col">
                    <img className="profile-Img" src={this.state.userInfo.profileImage ? this.state.userInfo.profileImage : "http://www.bathspa.ac.uk/media/WebProfilePictures/default_profile.jpg"}/>
                  </div>
                  <div className="mdl-cell--8-col">
                    <p className="profile-Name">{this.state.userInfo.username}</p>
                    <p className="profile-JobTitle">{this.state.userInfo.jobTitle ? this.state.userInfo.jobTitle : 'Employee' }</p>
                    <div>
                      <i className="material-icons icons-style">room</i>
                      <span className="icons-span">APAC, China, Shenzhen, Vision Hi-Tech Park, Blk 8{this.state.userInfo.homeAddress}</span>
                    </div>
                    <div>
                      <i className="material-icons icons-style">email</i>
                      <span className="icons-span">ThisIsEmail@email.com</span>
                    </div>
                    <div>
                      <i className="material-icons icons-style">phone</i>
                      <span className="icons-span">12345678912</span>
                    </div>
                  </div>
                </div>
                <div className="mdl-card__menu">
                  <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" onClick={this.props.baseInfoEdit}>
                    <i className="material-icons">edit</i>
                  </button>
                </div>
              </div>
          )
  }
}
export default BaseInfoComponent;
