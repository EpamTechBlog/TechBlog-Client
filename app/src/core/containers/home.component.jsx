import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import NavigationComponent from '../components/navigation.component.jsx';
import SidebarComponent from '../components/sidebar.component.jsx';

class HomeComponent extends React.Component{


	constructor() {
		super();
	}

	render() {

		return (
			<div>
			<NavigationComponent />
			<SidebarComponent />
			</div>

			)

	}
}

export default HomeComponent;
