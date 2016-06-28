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

			<div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">

			<nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
			<a className="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
			<a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">inbox</i>Inbox</a>
			<a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Trash</a>
			<a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">report</i>Spam</a>
			<a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">forum</i>Forums</a>
			<a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>Updates</a>
			<a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">local_offer</i>Promos</a>
			<a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">shopping_cart</i>Purchases</a>
			<a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">people</i>Social</a>
			<div className="mdl-layout-spacer"></div>
			<a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i><span class="visuallyhidden">Help</span></a>
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