import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import NavigationComponent from '../components/navigation.component.jsx';
import SidebarComponent from '../components/sidebar.component.jsx';
import CategoryComponent from '../../article/components/category.component.jsx';

class HomeComponent extends React.Component{


	constructor() {
		super();
	}

	render() {

		return (
			<div>

			<div className="topbar">
			<NavigationComponent />
			</div>

			<div>
			<CategoryComponent />
			</div>

			</div>

			)

	}
}

export default HomeComponent;