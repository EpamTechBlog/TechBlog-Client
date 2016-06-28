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
			<a className="mdl-navigation__link addnew" href=""><i className="material-icons" role="presentation">add</i>New Posts</a>
			<a className="mdl-navigation__link" href=""><i className="material-icons" role="presentation">home</i>Home</a>
			<a className="mdl-navigation__link" href=""><i className="material-icons" role="presentation">inbox</i>Inbox</a>
			<a className="mdl-navigation__link" href=""><i className="material-icons" role="presentation">delete</i>Trash</a>
			<a className="mdl-navigation__link" href=""><i className="material-icons" role="presentation">report</i>Spam</a>
			<a className="mdl-navigation__link" href=""><i className="material-icons" role="presentation">forum</i>Forums</a>
			<a className="mdl-navigation__link" href=""><i className="material-icons" role="presentation">flag</i>Updates</a>
			<a className="mdl-navigation__link" href=""><i className="material-icons" role="presentation">local_offer</i>Promos</a>
			<a className="mdl-navigation__link" href=""><i className="material-icons" role="presentation">shopping_cart</i>Purchases</a>
			<a className="mdl-navigation__link" href=""><i className="material-icons" role="presentation">help_outline</i>Help</a>
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