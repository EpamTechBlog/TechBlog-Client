import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
require('../../../styles/comment.style.css');

var Comment = React.createClass({
	rawMarkup: function() {
		var md = new Remarkable();
		var rawMarkup = md.render(this.props.children.toString());
		return { __html: rawMarkup };
	},

	render: function() {
		return (
			<div className="comment">
			<h2 className="commentAuthor">
			{this.props.creator}
			</h2>
			<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
			);
	}
});

var CommentList = React.createClass({

	getInitialState: function() {
		return {data: []};
	},


	componentDidMount: function() {
		//for test id_1
		this.loadCommentsFromServer('id_1');

		setInterval(this.loadCommentsFromServer, 2000);
	},
	loadCommentsFromServer: function(articleId) {

		$.ajax({
			url: 'http://localhost:8000/comments/id_1',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	
	render: function() {
		console.log('render',this.state.data);
		var commentNodes = this.state.data.map(function(comment) {
			var el = document.createElement( 'html' );
			el.innerHTML = comment.content;
			; 
			console.log(comment.creator);
			return (
				<div>
				<b>{comment.creator} - <span>{comment.time}</span></b>
				<p>{el.getElementsByTagName( 'p' )[0].textContent}</p>
				</div>
				);
		});
		return (
			<div className="commentList">
			{commentNodes}
			</div>
			);
	}
});

var CommentForm = React.createClass({
	getInitialState: function() {
		return {author: '', text: ''};
	},

	handleSubmit: function(e) {

		e.preventDefault();
		console.log(tinymce.activeEditor.getContent());

		axios.post('http://localhost:8000/comments', 
		{
			articleId: "id_1",
			creator: "adam",
			content: tinymce.activeEditor.getContent()
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	},
	render: function() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
			<div id="textarea-comment"></div>
			<input type="submit" value="Post" />
			</form>
			);
	}
});

class CommentComponent extends React.Component{
	

	render() {
		return (
			<div className="commentBox">
			<h1>Comments</h1>
			<CommentList/>
			<CommentForm/>
			</div>
			);
	}

}

export default CommentComponent;