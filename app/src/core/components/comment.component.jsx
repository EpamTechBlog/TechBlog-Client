import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
require('../../../styles/comment.style.css');
class CommentComponent extends React.Component{

	constructor(){

		super();
		this.state = { 
			comment:""
		};
		this.submit = this.submit.bind(this);
	}

	submit(e){
		// Get the HTML contents of the currently active editor
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
		// Get the raw contents of the currently active editor
		// console.log(tinymce.activeEditor.getContent({format: 'raw'}));	
	}

	render(){

		return (
			<div>

			<div className="comments_show">

			</div>

			<div className="commentEditor">	
			<h4>Your Comment</h4>
			<div id="textarea-comment"></div>
			<button onClick={this.submit} className="commentPostButton">Post</button>
			</div>

			</div>
			)
	}

	logout() {

		cookie.remove('username', { path: '/' });
		cookie.remove('userId', { path: '/' });
		this.setState({username : undefined, userId : undefined});

	}
}
export default CommentComponent;