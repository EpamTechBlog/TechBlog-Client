import React from 'react';
import { Link } from 'react-router';
require('../../styles/home.style.css');
class SingupComponent extends React.Component{


  constructor() {
    super();
    this.state = { data : [] };
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
                        <input className="mdl-textfield__input" type="text" id="addr1"/>
                        <label className="mdl-textfield__label" for="addr1">Username</label>
                      </div>
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="password" id="addr2"/>
                        <label className="mdl-textfield__label" for="addr2">Password</label>
                      </div>
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="password" id="addr3"/>
                        <label className="mdl-textfield__label" for="addr3">Confirm Password</label>
                      </div>
                    </div>
                    <div className='control'>
                      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                        Sign Up
                      </button>
                      <Link to={`/signin`}>Have Account? Sign In</Link>
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
}

export default SingupComponent;
