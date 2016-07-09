import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import TinyMCE from 'react-tinymce';
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
				// console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	
	render: function() {
		var commentNodes = this.state.data.map(function(comment) {
			var el = document.createElement( 'html' );
			el.innerHTML = comment.content;
			; 
			return (
				<li key={comment.time} class="mdl-list__item">
				<span class="mdl-list__item-primary-content">
				<i class="material-icons mdl-list__item-icon">person</i>
				{comment.creator} - <span>{comment.time}</span>
				</span>
				<p>{el.getElementsByTagName( 'p' )[0].textContent}</p>

				</li>
				);
		});
		return (
			<div className="commentList">
			<ul class="demo-list-icon mdl-list">
			{commentNodes}
			</ul>

			</div>
			);
	}
});

var CommentForm = React.createClass({
	getInitialState() {

		return {author: '', text: ''};
	},
	componentDidMount() {
	},

	handleEditorChange(e) {
		console.log(e.target.getContent());
	},

	handleSubmit: function(e) {

		e.preventDefault();
		var tinymce_editor_id = '#TinyMCE-comment'; 
		axios.post('http://localhost:8000/comments', 
		{
			articleId: "id_1",
			creator: "adam",
			content: tinymce.activeEditor.getContent()
		})
		.then(function (response) {
			// console.log(response);
			tinymce.activeEditor.setContent('');
		})
		.catch(function (error) {
			console.log(error);
		});

		
	},
	render: function() {

		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
			<div className="textarea-comment">
			<TinyMCE
			config={{
				menubar: false,
				plugins: 'autolink link image lists print preview',
				toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
			}}
			onChange={this.handleEditorChange}
			/>
			</div>
			<input className="comment-post-button" type="submit" value="Post" />
			</form>
			);
	}
});

class CommentComponent extends React.Component{

	render() {
		return (
			<div className="commentBox">
			<b>Comments:</b>
			<CommentForm/>
			<CommentList/>
			</div>
			);
	}

}

export default CommentComponent;