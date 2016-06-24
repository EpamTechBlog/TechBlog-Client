import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import SigninComponent from '../components/signin.component.jsx';
import SignupComponent from '../components/signup.component.jsx';

require('../../styles/home.style.css');
class LandingComponent extends React.Component{


  constructor() {
    super();

    // this.state = { username : cookie.load('username'), userId : cookie.load('userId') };
  }

  render() {

      return (
              <div>
              {(() => {
                    if(this.props.store.loginOrRegister == 'login'){
                      return (
                               <SigninComponent/>
                              );
                    }else{
                      return (
                               <SignupComponent/>
                             );
                    }
              })()}

              </div>
             )

  }

  logout() {

    // cookie.remove('username', { path: '/' });
    // cookie.remove('userId', { path: '/' });
    // this.setState({username : undefined, userId : undefined});

  }
}

export default LandingComponent;
