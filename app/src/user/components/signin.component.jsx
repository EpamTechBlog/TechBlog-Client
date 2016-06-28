import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import { userSignup } from '../actions/user.action';
require('../../../styles/index.style.css');
class SigninComponent extends React.Component{

  constructor() {
    super();
    this.state = { username : '', password: '' };
  }

  render() {
    
    return (
              <div className="backcontent mdl-layout mdl-js-layout">

                  <div className='content'>
                    <br></br>
                    <div className='logo'>
                      <img src='/app/res/logo.png'/>
                    </div>
                    <div className='form'>
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="addr1" value={this.state.username} required onChange={this.updateUsername.bind(this)}/>
                        <label className="mdl-textfield__label" for="addr1">Username</label>
                      </div>
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="password" id="addr2" value={this.state.password} required onChange={this.updatePassword.bind(this)}/>
                        <label className="mdl-textfield__label" for="addr2">Password</label>
                      </div>
                      <div className='errMsg'>
                        {(() => {
                              if(this.state.errMsg){
                                return (

                                          <i>{this.state.errMsg}</i>

                                        );
                              }
                        })()}
                      </div>
                    </div>
                    <div className='control'>
                      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.handleSubmit.bind(this)}>
                        Sign in
                      </button>
                      <Link to='/' onClick={this.props.userSignup}>No account? Sign Up</Link>
                    </div>
                    <div className='info'>
                      <br></br>
                      <b>Information for Employees</b>
                      <br></br>
                      <br></br>
                      <small>
                        This system is owned by EPAM Systems.
                        If you are not authorized to access this system,
                        exit immediately. Unauthorized access to this system is forbidden by company policies,
                        ational, and international laws.
                        Unauthorized users are subject to criminal and civil penalties as well as company initiated disciplinary proceedings.
                        By entering this system you acknowledge that you have authorized access and appropriate level of privilege within the system.
                      </small>
                    </div>

                  </div>

              </div>
          )
  }
  updateUsername(e){
    this.setState({username : e.target.value});
    //console.log(this.state);
  }
  updatePassword(e){
    this.setState({password : e.target.value});
    //console.log(this.state);
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.state.username.length > 6 && this.state.password.length > 6){
      this.submitForm(this.state.username, this.state.password);
    }else{
      this.setState({errMsg : 'username and password should be longer than 6 letters'});
    }
  }
  submitForm(username, password) {

        $.ajax({
            url: 'http://localhost:8000/users/login',
            dataType: 'json',
            type: "POST",
            data: {username : username, password : password},
            cache: false,
            success: function(data) {
              cookie.save('username', data.username, { path: '/' });
              cookie.save('userId', data._id, { path: '/' });
              hashHistory.push('/home');
            }.bind(this),
            error: function(xhr, status, err) {
              this.setState({errMsg : 'username and password do not match'});
              console.error(error, err.toString());
            }.bind(this)
          });
   }
}
export default SigninComponent;
