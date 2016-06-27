import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import SigninComponent from './src/components/signin.component.jsx';
import SignupComponent from './src/components/signup.component.jsx';
import NoMatchComponent from './src/components/signup.component.jsx';
import HomeComponent from './src/containers/home.component.jsx';
import LandingComponent from './src/containers/landing.component.jsx';
import App from './src/containers/app.component.jsx';
import store from './store';
import { Provider } from 'react-redux'
import cookie from 'react-cookie';

ReactDOM.render((
	<Provider store={store}>
	  <Router history={hashHistory}>
	    <Route component={App}>
	      <Route path='/' onEnter={checkAuth} component={LandingComponent} />
	    </Route>
	    <Route path='/home' component={HomeComponent} />
	  </Router>
	</Provider>
), document.getElementById('content'))

function checkAuth(nextState, replaceState) {
  if (hasLogin()) {
    replaceState({ nextPathname: nextState.location.pathname }, '/home');
  }
}

function hasLogin(){

	return (cookie.load('username') && cookie.load('userId'));
}