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
				<div className="article-page">
				<div className="article-main">
				<div className="postDetails-title">
				<h2 className="title article-title" >{this.props.article.title}
				</h2>
				<span className='mdl-navigation__link dateTag'><i className="material-icons article-icon">schedule</i>&nbsp;{this.props.article.publishDate}<span>&nbsp; | &nbsp;</span></span>

				<span className='mdl-navigation__link authorTag'><i className="material-icons article-icon">&#xE87C;</i>&nbsp;{this.props.article.authorName}</span>
				</div>
				<div className="article-content">
				<p>{this.props.article.content}</p>
				</div>
				</div>
				<div className="article-comment">
				<CommentComponent/>
				</div>
				</div>

				)
		}
	}
}

export default SingleArticlePageComponent;
