import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import SigninComponent from './src/components/signin.component.jsx';
import SignupComponent from './src/components/signup.component.jsx';
import NoMatchComponent from './src/components/signup.component.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/'>
      <IndexRoute path="" component={SignupComponent}/>
      <Route path="/signin" component={SigninComponent}/>
    </Route>
  </Router>
), document.getElementById('content'))