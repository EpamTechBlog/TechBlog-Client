import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import NavigationComponent from '../components/navigation.component.jsx';
import SidebarComponent from '../components/sidebar.component.jsx';
import CommentComponent from '../components/comment.component.jsx';

class HomeComponent extends React.Component{


	constructor() {
		super();
	}

	render() {

		return (
			<div className="frame">
			<NavigationComponent />
			<SidebarComponent />
			<CommentComponent/>
			</div>

			)

	}
}

export default HomeComponent;