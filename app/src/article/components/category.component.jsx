import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import SingleTopicComponent from './singletopic.component.jsx';
// require('../../styles/navi.style.css');
require('../../../styles/category.style.css');

class CategoryComponent extends React.Component{

	constructor(){

		super();

	}

	render(){
	  return (
			    <div>
					<ul className="demo-list-item mdl-list">
					      <h3>JAVASCRIPT</h3>
					
					 <li className="mdl-list__item">
					    <span className="mdl-list__item-primary-content">
					      <div className="mdl-grid">
					      	<SingleTopicComponent imgsrc='http://download.4-designer.com/files/20130906/Creative-business-meetings-HD-pictures-48709.jpg' topic='Javascript' description='When Layla appears, she brings an eternal summer along' link='#'/>
						  </div>
						  <div className="mdl-grid">
					      	<SingleTopicComponent imgsrc='http://download.4-designer.com/files/20130906/Creative-business-meetings-HD-pictures-48709.jpg' topic='Javascript' description='When Layla appears, she brings an eternal summer along' link='#'/>
						  </div>
						  <div className="mdl-grid">
					      	<SingleTopicComponent imgsrc='http://download.4-designer.com/files/20130906/Creative-business-meetings-HD-pictures-48709.jpg' topic='Javascript' description='When Layla appears, she brings an eternal summer along' link='#'/>
						  </div>
					    </span>
					  </li>
					      <h3>JAVASCRIPT</h3>

					  <li className="mdl-list__item">
					    <span className="mdl-list__item-primary-content">
					      <div className="mdl-grid">
					      	<SingleTopicComponent imgsrc='http://download.4-designer.com/files/20130906/Creative-business-meetings-HD-pictures-48709.jpg' topic='Javascript' description='When Layla appears, she brings an eternal summer along' link='#'/>
						  </div>
						  <div className="mdl-grid">
					      	<SingleTopicComponent imgsrc='http://download.4-designer.com/files/20130906/Creative-business-meetings-HD-pictures-48709.jpg' topic='Javascript' description='When Layla appears, she brings an eternal summer along' link='#'/>
						  </div>
						  <div className="mdl-grid">
					      	<SingleTopicComponent imgsrc='http://download.4-designer.com/files/20130906/Creative-business-meetings-HD-pictures-48709.jpg' topic='Javascript' description='When Layla appears, she brings an eternal summer along' link='#'/>
						  </div>
					    </span>
					  </li>
					</ul>
				</div>
			)
	}
}
					
export default CategoryComponent;