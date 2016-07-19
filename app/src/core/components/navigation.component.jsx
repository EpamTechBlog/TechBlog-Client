import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
require('../../../styles/navi.style.css');
class NavigationComponent extends React.Component{

	constructor(){

		super();
		this.state = { username : cookie.load('username'), userId : cookie.load('userId'), userImage : '' };
	}

	componentDidMount(){
		componentHandler.upgradeDom();
		if(cookie.load("userId")){
			//console.log(cookie.load("userId"));
			setInterval(() => {

				$.ajax({
			        url: 'http://localhost:8000/users/' + cookie.load('userId'),
			        dataType: 'json',
			        type: "GET",
			        cache: false,
			        success: function(data) {
			        	if(!data.message)
			        		this.setState({ userImage : data.profileImage });

			        }.bind(this),
			        error: function(xhr, status, err) {
			        	console.error(error, err.toString());
			        }.bind(this)
			    });

			}, 2000);
		}
	}

	render(){
		return (
			<div className="topbar">
			<div className="mdl-layout__header">
			<div className="mdl-layout__header-row">
			<a href='/#/home'>
			<span className="mdl-layout-title">TechBlog</span>
			</a>
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
						<img className="navi-profile-Img" src={this.state.userImage ? this.state.userImage : "http://www.bathspa.ac.uk/media/WebProfilePictures/default_profile.jpg"} />
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