import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import SigninComponent from './src/components/signin.component.jsx';
import SignupComponent from './src/components/signup.component.jsx';
import NoMatchComponent from './src/components/signup.component.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={SigninComponent}>
      <Route path="/signup" component={SignupComponent}/>		
      <Route path="/*" component={NoMatchComponent}/>
    </Route>
  </Router>
), document.getElementById('content'))