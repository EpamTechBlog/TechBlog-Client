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
		var articleId = this.props.id;

		var commentTocommentForm = function(commentId){

			var handleReplyToComment = function(e) {

				e.preventDefault();

				var childComment = $('#' + commentId + ' textarea').val();
				var replyer = cookie.load('username');

				axios.post('http://localhost:8000/comments/' + articleId + '/reply/' + commentId,
				{

					replyer: replyer,
					content: childComment
				})
				.then(function (response) {
					//console.log(response);
					$('#' + commentId + ' textarea').val('');
				})
				.catch(function (error) {
					console.log(error);
				});

			};

			return (
					<form className="replyToComment hidden" id={commentId} onSubmit={handleReplyToComment}>
						<textarea />
						<input className="common-button replyComment" type="submit" value="Reply" />
					</form>
				)
		}
		var commentNodes = this.state.data.map(function(comment) {

			var showReplyBox = function(commentId){
				if(!cookie.load('username')){
					hashHistory.push('/');
					return;
				}
				$('#' + commentId).toggleClass("hidden");
			};
			var commentTime = new Date(comment.time);
			var showCommentTime = commentTime.toLocaleString();

			var commentToCommentNodes = comment.comments2comments.map(function(comment2comment){
				var comment2commentTime = new Date(comment2comment.time);
				var showCommentToCommentTime = comment2commentTime.toLocaleString();
				return (

						<div className='childComment'>
							<p>
							<i className="material-icons">reply</i>
							<span className="comment-creator">{comment2comment.replyer}</span> - <span>{showCommentToCommentTime}</span>
							</p>
							<p dangerouslySetInnerHTML={{__html: comment2comment.content}}></p>
						</div>

					)
			});
			return (


					<li key={comment.time} className="content-font commentList-comment">
						<div className="comment-title">
							<i className="material-icons">face</i>
							<span className="comment-creator"> {comment.creator}</span> - <span>{showCommentTime}</span>
							<span className="comment-replyer">
								<button className='showCommentReplyBox'onClick={showReplyBox.bind(this, comment._id)}>Reply</button>
							</span>
						</div>
						<div className="comment-text">

							<span dangerouslySetInnerHTML={{__html: comment.content}}>
							</span>
						</div>

						{commentToCommentNodes}
						{commentTocommentForm(comment._id)}

					</li>

				);
		});
		return (
			<div className="commentList">
			<ul className="mdl-list">
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
		if(!cookie.load('username')){
			hashHistory.push('/');
			return;
		}
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
			<input className="common-button" type="submit" value="Reply" />
			<br/>
			</form>
			);
	}
});

class CommentComponent extends React.Component{

	render() {

		return (
			<div className="commentBox">
			<hr />
			<b>Comments:</b>
			<CommentList id={this.props.id}/>
			<CommentForm id={this.props.id}/>
			</div>
			);
	}

}

export default CommentComponent;