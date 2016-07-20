import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import CommentComponent from "../components/comment.component";
require('../../../styles/singlearticlepage.style.css');


class SingleArticlePageComponent extends React.Component{

	constructor(){

		super();
		this.showDate = this.showDate.bind(this);
	}
	showDate(date){
    var publishDate = new Date(date),
        year = publishDate.getFullYear(),
        month = publishDate.getMonth(),
        day = publishDate.getDate(),
        hour = publishDate.getHours(),
        minute = publishDate.getMinutes();
    var createdDate = month + "/" + day + "/" + year
                      + " " + hour +":"+ minute;
    return createdDate;
  }
	render(){
		if(!this.props.article._id){

			return (

				<div id="progress" className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
				)
		}else{

			return (
				<div className="article-page">
				<div className="article-main">
				<div className="postDetails-title">
				<h2 className="title article-title" >{this.props.article.title}
				{(() => {
              	if(cookie.load('userId') == this.props.article.authorId){
	                return (
	                			<div>
	                        		<span className="material-icons article-icon article-control" onClick={this.deletePost.bind(this)}>delete forever</span>
									<span className="material-icons article-icon article-control" onClick={this.editPost.bind(this)}>create</span>
				 				</div>
	                        );
              	}else{
              		return (
	                			<div>
									<span className="material-icons article-icon article-control" onClick={this.subscribePost.bind(this)}>subscriptions</span>
				 				</div>
	                        );
              	}
		     	})()}
				</h2>

				<span className='mdl-navigation__link dateTag'><i className="material-icons article-icon">schedule</i>&nbsp;{this.showDate(this.props.article.publishDate)}<span>&nbsp; | &nbsp;</span></span>

				<span className='mdl-navigation__link authorTag'><i className="material-icons article-icon">&#xE87C;</i>&nbsp;{this.props.article.authorName}</span>
				</div>
				<div className="article-content">
				<p dangerouslySetInnerHTML={{__html: this.props.article.content}}></p>
				</div>
				</div>
				<div className="article-comment">
				<CommentComponent id={this.props.article._id}/>
				</div>
				</div>

				)

		}
	}
	deletePost() {
		this.props.asynDeleteMiddleware(this.props.article._id, this.props.article.topic);
		hashHistory.push('/articles');
	}
	editPost() {
		console.log(this.props.article._id)
	}
	subscribePost() {

	}
}
export default SingleArticlePageComponent;
