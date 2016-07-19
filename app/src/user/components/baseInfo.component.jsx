import React from 'react';
import { baseInfoEditing } from '../actions/profile.action';
import cookie from 'react-cookie';
import $ from "jquery";
require('../../../styles/index.style.css');

class BaseInfoComponent extends React.Component{

  constructor() {
    super();
    this.state = { userInfo: {username : '', jobTitle : '', skills : [], articles :　[], profileImage : '', homeAddress : '', email : '', phone : ''},
                   isLoadingProfile : true
                 };
  }
  componentDidMount(){

    $.ajax({
            url: 'http://localhost:8000/users/' + cookie.load('userId'),
            dataType: 'json',
            type: "GET",
            cache: false,
            success: function(data) {

              setTimeout(() => this.setState({ userInfo : data, isLoadingProfile : false }), 1000);

            }.bind(this),
            error: function(xhr, status, err) {
              console.error(error, err.toString());
            }.bind(this)
          });
  }
  render() {

    return (
              <div className="demo-card-wide mdl-card mdl-shadow--2dp profile-container baseInfo">
                <br/>
                <div className="mdl-card__supporting-text mdl-grid">
                  <div className="mdl-cell--5-col mdl-cell--6-col-tablet">
                    <img className="baseInfo-Img" src={this.state.userInfo.profileImage ? this.state.userInfo.profileImage : "http://www.bathspa.ac.uk/media/WebProfilePictures/default_profile.jpg"}/>
                  </div>
                  <div className="mdl-cell--5-col mdl-cell--6-col-tablet">
                    <p className="baseInfo-Name">{this.state.userInfo.username}</p>
                    <p className="baseInfo-JobTitle">{this.state.userInfo.jobTitle ? this.state.userInfo.jobTitle : 'Employee' }</p>
                    <div>
                      <i className="material-icons baseInfo-icons-style">room</i>
                      <span className="baseInfo-icons-span">{this.state.userInfo.homeAddress}</span>
                    </div>
                    <div>
                      <i className="material-icons baseInfo-icons-style">email</i>
                      <span className="baseInfo-icons-span">{this.state.userInfo.email}</span>
                    </div>
                    <div>
                      <i className="material-icons baseInfo-icons-style">phone</i>
                      <span className="baseInfo-icons-span">{this.state.userInfo.phone}</span>
                    </div>
                  </div>
                </div>
                <div className="mdl-card__menu">
                  <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" onClick={this.props.baseInfoEditing}>
                     {(() => {
                              if(this.state.isLoadingProfile){
                                return (

                                          <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>

                                        );
                              }else{
                                return (
                                            <a className="material-icons">edit</a>

                                        );
                              }
                     })()}

                  </button>
                </div>
              </div>
          )
  }
}
export default BaseInfoComponent;
