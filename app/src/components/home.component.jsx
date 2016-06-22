import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
require('../../styles/home.style.css');
class HomeComponent extends React.Component{


  constructor() {
    super();

    this.state = { username : cookie.load('username'), userId : cookie.load('userId') };
  }

  render() {

      return (
              <div>
              {(() => {
                    if(!this.state.username || !this.state.userId){
                      return (
                               <div>
                                <Link to={`/signin`}>Sign In</Link>
                                <span>  </span>
                                <Link to={`/`}>Sign Up</Link>
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
             )

  }

  logout() {

    cookie.remove('username', { path: '/' });
    cookie.remove('userId', { path: '/' });
    this.setState({username : undefined, userId : undefined});

  }
}

export default HomeComponent;
