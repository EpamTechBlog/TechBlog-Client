import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
require('../../../styles/sidebar.style.css');
class SidebarComponent extends React.Component{

	constructor(){

		super();
		this.state = { username : cookie.load('username'), userId : cookie.load('userId') };
	}
	render(){
		console.log('in sidebar', this.props);
		return (

			<div className="demo-drawer mdl-layout__drawer ">

				<nav className="demo-navigation mdl-navigation ">
					<span className="mdl-navigation__link addnew" onClick={this.props.asynGetArticlesByTopicMiddle.bind(null, 'POST_PAGE')}><i className="material-icons">add</i>Post</span>
					<span className="mdl-navigation__link" onClick={this.props.asynGetArticlesByTopicMiddle.bind(null, 'JAVA')}><i className="material-icons">inbox</i>JAVA</span>
					<span className="mdl-navigation__link" onClick={this.props.asynGetArticlesByTopicMiddle.bind(null, 'JAVASCRIPT')}><i className="material-icons">inbox</i>JAVASCRIPT</span>
					<span className="mdl-navigation__link" onClick={this.props.asynGetArticlesByTopicMiddle.bind(null, 'C++')}><i className="material-icons">inbox</i>C++</span>
					<span className="mdl-navigation__link" onClick={this.props.asynGetArticlesByTopicMiddle.bind(null, 'PHP')}><i className="material-icons">inbox</i>PHP</span>
					<span className="mdl-navigation__link" onClick={this.props.asynGetArticlesByTopicMiddle.bind(null, 'IOS')}><i className="material-icons">inbox</i>IOS</span>
					<span className="mdl-navigation__link" onClick={this.props.asynGetArticlesByTopicMiddle.bind(null, 'C#')}><i className="material-icons">inbox</i>C#</span>
				<div class="mdl-layout-spacer"></div>

				</nav>
			</div>
			)
	}



	logout() {

		cookie.remove('username', { path: '/' });
		cookie.remove('userId', { path: '/' });
		this.setState({username : undefined, userId : undefined});

	}
}
export default SidebarComponent