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
		//every 2s get comments
		setInterval(this.loadCommentsFromServer, 2000, this.props.id);

	},
	loadCommentsFromServer: function(articleId) {

		$.ajax({
			url: 'http://localhost:8000/comments/' + articleId,
			dataType: 'json',
			cache: false,
			success: function(data) {
				if(data != null)
					this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.log(err);
			}.bind(this)
		});
	},

	render: function() {

		var commentNodes = this.state.data.map(function(comment) {

			return (
				<div>

					<li key={comment.time} className="content-font commentList-comment">
						<div className="comment-title">
							<i className="material-icons">face</i>
							<span className="comment-creator"> {comment.creator}</span> - <span>{comment.time} </span>
						</div>
						<div>

							<span dangerouslySetInnerHTML={{__html: comment.content}}>
							</span>
						</div>

					</li>
				</div>
				);
		});
		return (
			<div className="commentList">
			<ul className="demo-list-icon mdl-list">
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

	handleSubmit: function(e) {

		e.preventDefault();
		var tinymce_editor_id = '#TinyMCE-comment';
		axios.post('http://localhost:8000/comments',
		{
			articleId: this.props.id,
			creator: cookie.load('username'),
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
			<input className="common-button" type="submit" value="Post" />
			</form>
			);
	}
});

class CommentComponent extends React.Component{

	render() {

		return (
			<div className="commentBox">
			<b>Comments:</b>
			<CommentForm id={this.props.id}/>
			<CommentList id={this.props.id}/>
			</div>
			);
	}

}

export default CommentComponent;