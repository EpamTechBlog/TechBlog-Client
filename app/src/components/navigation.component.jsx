import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";

class NavigationComponent extends React.Component{

	constructor(){

		super();
	    this.state = { username : cookie.load('username'), userId : cookie.load('userId') };

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
		                                <Link to={`/`}>Sign In</Link>
		                               </div>
		                              );
		                    }else{
		                      return (
		                               <div>
		                                <p>Hello, {this.state.username}</p>
		                                <button onClick={this.logout.bind(this)}>Logout</button>
		                               </div>
		                             );
		                    }
		              })()}	
				      
				    </div>
				  </header>
				  <div className="mdl-layout__drawer">
				    <span className="mdl-layout-title">Title</span>
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
}
export default NavigationComponent