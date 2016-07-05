import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import NavigationComponent from '../components/navigation.component.jsx';
import SidebarComponent from '../components/sidebar.component.jsx';
import CategoryComponent from '../../article/components/category.component.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from '../../article/actions/article.action';

class HomeComponent extends React.Component{


	constructor() {
		super();
	}

	render() {
		console.log('11', this.props);
		return (
			<div>

			<div className="topbar">
			<NavigationComponent />
			</div>

			<div>
			<CategoryComponent {...this.props}/>
			</div>

			</div>

			)

	}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(articleActions, dispatch)
}

export default connect(null, mapDispatchToProps)(HomeComponent);