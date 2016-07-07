import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import CommentComponent from "../components/comment.component";
require('../../../styles/singlearticlepage.style.css');


class SingleArticlePageComponent extends React.Component{

	constructor(){

		super();

	}

	render(){
		if(this.props.article == {}){
			return (

							<div id="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
						 )
		}else{


			return (

				<div className="demo-card-square mdl-card mdl-shadow--2dp singleArticle">
				  <div className="mdl-card__title mdl-card--expand">
				    <h2 className="mdl-card__title-text">{this.props.article.title}</h2>
				    <div className='authorTag'>by {this.props.article.authorName}</div>
				  </div>
				  <div className="mdl-card__supporting-text">
				    {this.props.article.content}
				  </div>
				  <div className="mdl-card__actions mdl-card--border">
				  	<CommentComponent/>
				  </div>
				</div>


				)
		}
  }
}

export default SingleArticlePageComponent;
