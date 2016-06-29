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
					      <h3>JS</h3>

					 <li className="mdl-list__item">
					    <span className="mdl-list__item-primary-content">
					      <div className="mdl-grid">
					      	<SingleTopicComponent imgsrc='http://download.4-designer.com/files/20130906/Creative-business-meetings-HD-pictures-48709.jpg' topic='JS' description='When Layla appears, she brings an eternal summer along' link='#' effect='effect-layla effect-layla1'/>
						  </div>
						  <div className="mdl-grid">
					      	<SingleTopicComponent imgsrc='http://tympanus.net/Development/HoverEffectIdeas/img/17.jpg' topic='PHP' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' link='#' effect='effect-layla effect-layla2'/>
						  </div>
						  <div className="mdl-grid">
					      	<SingleTopicComponent imgsrc='http://tympanus.net/Development/HoverEffectIdeas/img/25.jpg' topic='JAVA' description='Sed vehicula, augue sit amet tincidunt molestie, metus augue risus' link='#' effect='effect-layla effect-layla3'/>
						  </div>
					    </span>
					  </li>
					  	
					  <li className="mdl-list__item">
					    <span className="mdl-list__item-primary-content">
					      <div className="mdl-grid">
					      	<SingleTopicComponent imgsrc='http://tympanus.net/Development/HoverEffectIdeas/img/3.jpg' topic='C#' description='Proin mauris ante, scelerisque ut sollicitudin consectetur' link='#' effect='effect-layla effect-layla4'/>
						  </div>
						  <div className="mdl-grid">
					      	<SingleTopicComponent imgsrc='http://tympanus.net/Development/HoverEffectIdeas/img/9.jpg' topic='IOS' description='Maecenas vulputate sem ut purus rutrum mattis retra finibus' link='#' effect='effect-layla effect-layla5'/>
						  </div>
						  <div className="mdl-grid">
					      	<SingleTopicComponent imgsrc='http://tympanus.net/Development/HoverEffectIdeas/img/12.jpg' topic='C++' description='Pellentesque egestas magna fringillagna varius' link='#' effect='effect-layla effect-layla6'/>
						  </div>
					    </span>
					  </li>
					</ul>
				</div>
			)
	}
}
					
export default CategoryComponent;