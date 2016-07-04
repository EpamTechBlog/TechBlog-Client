import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Articles from './components/articles.component.jsx';


ReactDOM.render((
    <Router history={hashHistory}>
      <Route>
        <Route path='/' component={Articles} />
      </Route>
    </Router>
), document.getElementById('content'))
