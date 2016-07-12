import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import SigninComponent from './src/user/components/signin.component.jsx';
import SignupComponent from './src/user/components/signup.component.jsx';
import NoMatchComponent from './src/user/components/signup.component.jsx';
import HomeComponent from './src/core/containers/home.component.jsx';
import ArticlesComponent from './src/article/containers/article.component.jsx';
import ProfileComponent from './src/user/containers/profile.component.jsx';
import LandingComponent from './src/user/containers/landing.component.jsx';
import SelectedArticleComponent from './src/article/containers/selectedArticle.component.jsx';
import App from './src/core/containers/app.component.jsx';
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
	<Route path='/articles' component={ArticlesComponent} />
	<Route path='/articles/:id' component={SelectedArticleComponent} />
	<Route path='/profile' onEnter={notLogin} component={ProfileComponent} />
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

	function notLogin(nextState, replaceState){
		if(!hasLogin()) {
			replaceState({ nextPathname: nextState.location.pathname }, '/');
		}
	}