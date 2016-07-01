import React from 'react';
import { bindActionCreators } from 'redux';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import { connect } from 'react-redux';
import SigninComponent from '../components/signin.component.jsx';
import SignupComponent from '../components/signup.component.jsx';
import * as userActions from '../actions/user.action';

class LandingComponent extends React.Component{


  constructor() {
    super();

    // this.state = { username : cookie.load('username'), userId : cookie.load('userId') };
  }

  render() {

    if (this.props.loginOrRegister === 'signin') {

      return <SigninComponent {...this.props} />
    } else {

      return <SignupComponent {...this.props} />
    }
  }

  logout() {

    // cookie.remove('username', { path: '/' });
    // cookie.remove('userId', { path: '/' });
    // this.setState({username : undefined, userId : undefined});

  }
}

function mapStateToProps(state) {
  return {
    loginOrRegister: state.loginOrRegister
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingComponent);
