import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import NavigationComponent from '../components/navigation.component.jsx';

class ProfileComponent extends React.Component{


  constructor() {
    super();
  }

  render() {

      return (
            <div>
              <NavigationComponent />
              <p>Hello</p>
            </div>
             )

  }
}

export default ProfileComponent;
