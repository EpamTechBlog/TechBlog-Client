import React from 'react';
import $ from "jquery";
import cookie from 'react-cookie';
import { baseInfoEdited } from '../actions/profile.action';
import { hashHistory } from 'react-router';
require('../../../styles/profile.style.css');

class MyPostComponent extends React.Component{

	constructor() {
		super();
		this.state = { MyPosts: [], isLoadingProfile : true };
	}

	componentDidMount(){
    	$.ajax({
            url: 'http://localhost:8000/articles/author/' + cookie.load('userId'),
            dataType: 'json',
            type: "GET",
            cache: false,
            success: function(data) {
            	setTimeout(() => {this.setState({ MyPosts : data.articles, isLoadingProfile : false })}, 1000);
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(error, err.toString());
            }.bind(this)
        });

	}

	render() {
		var posts = this.state.MyPosts.map((post) => {
			var publishDate = new Date(post.publishDate),
				year = publishDate.getFullYear(),
				month = publishDate.getMonth(),
				day = publishDate.getDate();
			var createdDate = year + "/" + month + "/" + day;
			return (
				<tr key={post._id} onClick={this.toArticle.bind(this, post._id)}>
					<td className="mdl-data-table__cell--non-numeric">{post.title}</td>
					<td>{createdDate}</td>
					<td>{post.topic}</td>							
				</tr>
			)
		})
		return (
				<div className="demo-card-wide mdl-card mdl-shadow--2dp profile-container">
	                  <div className="mdl-card__title">
	                    <h2 className="mdl-card__title-text">My Post</h2>
	                  </div>
	                  <div className="mdl-card__supporting-text myposts-div-contain-table">
	                    <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp profile-table">
	                      <thead>
	                        <tr>
	                          <th className="mdl-data-table__cell--non-numeric">Title</th>
	                          <th className="md-cell">Created Date</th>
	                          <th>Topic</th>
	                        </tr>
	                      </thead>
	                      <tbody>
	                      	{posts}
	                      </tbody>
	                    </table>
	                  </div>
	                  <div className="mdl-card__menu">
		                  <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" onClick={this.props.baseInfoEditing}>
		                     {(() => {
		                              if(this.state.isLoadingProfile){
		                                return (

		                                          <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>

		                                        );
		                              }
		                     })()}

		                  </button>
		              </div>
	            </div>
			   )
	}
	toArticle(id){
		hashHistory.push('/articles/' + id);
	}
}

export default MyPostComponent