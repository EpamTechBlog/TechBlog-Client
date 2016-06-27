import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import { topBar } from '../actions/user.action';
import AppBar from 'material-ui/AppBar';

require('../../styles/home.style.css');
class topBarComponent extends React.Component{

	constructor() {
		super();
		this.state = { username : '', password: '' };
	}

	render(){
		return(
			<div className="mdl-layout__header">
			<div className="mdl-layout__header-row">

			<span className="mdl-layout-title">TechBlog</span>

			<div className="mdl-layout-spacer"></div>

			{(() => {
				if(!this.state.username || !this.state.userId){
					return (
						<div>
						<Link className='navi-signup' to={`/`}>Sign Up</Link>
						</div>
						);
				}else{
					return (
						<div className="mdl-list__item">
						<span className="mdl-list__item-primary-content">
						<i className="material-icons mdl-list__item-avatar">person</i>
						<span>{this.state.username}</span>
						</span>
						<div className="mdl-layout-spacer"></div>

						<button id="demo-menu-lower-right" className="mdl-button mdl-js-button mdl-button--icon">
						<i className="material-icons">more_vert</i>
						</button>

						<ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
						htmlFor="demo-menu-lower-right">
						<li className="mdl-menu__item">My Profile</li>
						<li className="mdl-menu__item" onClick={this.logout.bind(this)}>Logout</li>
						</ul>
						</div>
						);
				}
			})()}

			</div>
			</div>
			);
	}
}

export default topBarComponent;