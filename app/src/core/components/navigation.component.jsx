import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
require('../../../styles/navi.style.css');
class NavigationComponent extends React.Component{

	constructor(){

		super();
		this.state = { username : cookie.load('username'), userId : cookie.load('userId') };
	}
	render(){
		return (

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
						<li className="mdl-menu__item" onClick={this.profile.bind(this)}>My Profile</li>
						<li className="mdl-menu__item" onClick={this.logout.bind(this)}>Logout</li>
						</ul>
						</div>
						);
				}
			})()}

			</div>
			</div>
			)
	}

	logout() {

		cookie.remove('username', { path: '/' });
		cookie.remove('userId', { path: '/' });
		this.setState({username : undefined, userId : undefined});
		hashHistory.push('/home');

	}

	profile(){

		hashHistory.push('/profile');
	}
}
export default NavigationComponent