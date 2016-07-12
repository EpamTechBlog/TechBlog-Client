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
		return (

			<div className="demo-drawer mdl-layout__drawer ">

			<nav className="demo-navigation mdl-navigation ">
			<span className="mdl-navigation__link addnew" onClick={this.goToTopic.bind(this,'POST_PAGE')}><i className="material-icons">add</i>Post</span>
			<span className="mdl-navigation__link" onClick={this.goToTopic.bind(this, 'JAVA')}><i className="material-icons">local_cafe</i>JAVA</span>
			<span className="mdl-navigation__link" onClick={this.goToTopic.bind(this, 'JAVASCRIPT')}><i className="material-icons">loyalty</i>JAVASCRIPT</span>
			<span className="mdl-navigation__link" onClick={this.goToTopic.bind(this, 'C++')}><i className="material-icons">donut_small</i>C++</span>
			<span className="mdl-navigation__link" onClick={this.goToTopic.bind(this, 'PHP')}><i className="material-icons">queue_play_next</i>PHP</span>
			<span className="mdl-navigation__link" onClick={this.goToTopic.bind(this, 'IOS')}><i className="material-icons">laptop_mac</i>IOS</span>
			<span className="mdl-navigation__link" onClick={this.goToTopic.bind(this, 'C#')}><i className="material-icons">closed_caption</i>C#</span>
			<div className="mdl-layout-spacer"></div>

			</nav>
			</div>
			)
	}

	goToTopic(topic){

		this.props.asynGetArticlesByTopicMiddle(topic);
		hashHistory.push('/articles');
	}
}
export default SidebarComponent