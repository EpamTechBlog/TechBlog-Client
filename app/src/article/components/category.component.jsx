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
		this.state = {topics : []};
	}
	componentDidMount() {
	 	$.ajax({
            url: 'http://localhost:8000/topics',
            dataType: 'json',
            type: "GET",
            cache: false,
            success: function(data) {
              this.setState({ topics :  data});
            }.bind(this),
            error: function(xhr, status, err) {

              console.error(error, err.toString());
            }.bind(this)
          });
	}

	render(){

	  let topics = this.state.topics.map((topic) => {
	  	return (
	  			<div className="mdl-cell mdl-cell--4-col" key={topic._id}>
			      	<SingleTopicComponent {...this.props} imgsrc={topic.img} topic={topic.topicName} description={topic.description} effect={topic.effect}/>
				  </div>
	  		   )
	  });
	  return (
			    <div>
  					<ul className="demo-list-item mdl-list">
  					 <li className="mdl-grid">
               {topics}
  					 </li>
  					</ul>
				  </div>
			)
	}

}

export default CategoryComponent;