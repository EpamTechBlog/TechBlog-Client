import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import NavigationComponent from '../components/navigation.component.jsx';

class HomeComponent extends React.Component{


  constructor() {
    super();
  }

  render() {

      return (
              <NavigationComponent />

             )

  }
}

export default HomeComponent;
