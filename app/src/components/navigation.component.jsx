import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
require('../../styles/navi.style.css');
class NavigationComponent extends React.Component{

	constructor(){

		super();
	    this.state = { username : cookie.load('username'), userId : cookie.load('userId'), isVisible : "mdl-menu__container is-upgraded" };

	}
	render(){
	  return (
				<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
				  <header className="mdl-layout__header">
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
										    <button id="accbtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" data-upgraded=",MaterialButton,MaterialRipple" onClick={this.changeVisible.bind(this)}>
									              <i className="material-icons" role="presentation">arrow_drop_down</i>
									              <span className="visuallyhidden">Accounts</span>
									              <span className="mdl-button__ripple-container">
									              	<span className="mdl-ripple is-animating"></span>
									              </span>
									        </button>
									        <div className={this.state.isVisible}>
									        	<div className="mdl-menu__outline mdl-menu--bottom-right"></div>
									        	<ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events" for="accbtn" data-upgraded=",MaterialMenu,MaterialRipple">
										              <li className="mdl-menu__item mdl-js-ripple-effect" tabindex="-1" data-upgraded=",MaterialRipple">My Profile<span className="mdl-menu__item-ripple-container"><span className="mdl-ripple"></span></span></li>
										              <li onClick={this.logout.bind(this)} className="mdl-menu__item mdl-js-ripple-effect" tabindex="-1" data-upgraded=",MaterialRipple">Logout<span className="mdl-menu__item-ripple-container"><span className="mdl-ripple"></span></span></li>
								            	</ul>
								            </div>
									   </div>
		                             );
		                    }
		              })()}	
				      
				    </div>
				  </header>
				  <div className="mdl-layout__drawer">
				    <span className="mdl-layout-title">TechBlog</span>
				    <nav className="mdl-navigation">
				      <a className="mdl-navigation__link" href="">Link</a>
				      <a className="mdl-navigation__link" href="">Link</a>
				      <a className="mdl-navigation__link" href="">Link</a>
				      <a className="mdl-navigation__link" href="">Link</a>
				    </nav>
				  </div>
				  <main className="mdl-layout__content">
				    <div className="page-content">
				    </div>
				  </main>
				</div>
			)
	}

  logout() {

    cookie.remove('username', { path: '/' });
    cookie.remove('userId', { path: '/' });
    this.setState({username : undefined, userId : undefined});

  }
  changeVisible() {
  	
  	if(this.state.isVisible == "mdl-menu__container is-upgraded is-visible"){
  		this.setState({isVisible : "mdl-menu__container is-upgraded"});
  	}
  	else this.setState({isVisible : "mdl-menu__container is-upgraded is-visible"});
  }
}
export default NavigationComponent