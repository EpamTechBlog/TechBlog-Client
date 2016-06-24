import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import SigninComponent from './src/components/signin.component.jsx';
import SignupComponent from './src/components/signup.component.jsx';
import NoMatchComponent from './src/components/signup.component.jsx';
import HomeComponent from './src/components/home.component.jsx';
import LandingComponent from './src/containers/landing.component.jsx';
import App from './src/containers/app.component.jsx';
import store from './store';
import { Provider } from 'react-redux'

ReactDOM.render((
	<Provider store={store}>
	  <Router history={hashHistory}>
	    <Route path='/' component={App}>
	      <IndexRoute component={LandingComponent} />
	      // add containers with path here...
	    </Route>
	  </Router>
	</Provider>
), document.getElementById('content'))