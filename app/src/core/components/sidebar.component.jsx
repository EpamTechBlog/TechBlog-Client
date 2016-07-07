import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import store from "../../../store.js";
require('../../../styles/sidebar.style.css');
class SidebarComponent extends React.Component{

	constructor(){

		super();
		this.state = { topics : [] };
	}

	componentDidMount(){

		axios.get('http://localhost:8000/topics').then((data) => {
			let post = {topicName : 'NEW POST', icon : 'add'};
			data.data.unshift(post);
      this.setState({ topics :  data.data});
    }).catch((err) => console.log(err));

	}

	render(){
		console.log('in sidebar', this.props);
		return (

			<div className="demo-drawer mdl-layout__drawer ">

				<nav className="demo-navigation mdl-navigation ">
					<span className="mdl-navigation__link addnew" onClick={this.props.asynGetArticlesByTopicMiddle.bind(null, 'POST_PAGE')}><i className="material-icons">add</i>Post</span>
					<span className="mdl-navigation__link" onClick={this.props.asynGetArticlesByTopicMiddle.bind(null, 'JAVA')}><i className="material-icons">local_cafe</i>JAVA</span>
					<span className="mdl-navigation__link" onClick={this.props.asynGetArticlesByTopicMiddle.bind(null, 'JAVASCRIPT')}><i className="material-icons">loyalty</i>JAVASCRIPT</span>
					<span className="mdl-navigation__link" onClick={this.props.asynGetArticlesByTopicMiddle.bind(null, 'C++')}><i className="material-icons">donut_small</i>C++</span>
					<span className="mdl-navigation__link" onClick={this.props.asynGetArticlesByTopicMiddle.bind(null, 'PHP')}><i className="material-icons">queue_play_next</i>PHP</span>
					<span className="mdl-navigation__link" onClick={this.props.asynGetArticlesByTopicMiddle.bind(null, 'IOS')}><i className="material-icons">laptop_mac</i>IOS</span>
					<span className="mdl-navigation__link" onClick={this.props.asynGetArticlesByTopicMiddle.bind(null, 'C#')}><i className="material-icons">closed_caption</i>C#</span>
				<div class="mdl-layout-spacer"></div>

				</nav>
			</div>
			)
	}

<<<<<<< HEAD
	goToTopic(topic){
=======


	logout() {

		cookie.remove('username', { path: '/' });
		cookie.remove('userId', { path: '/' });
		this.setState({username : undefined, userId : undefined});
>>>>>>> 4c60c75c9eb331284c354725eab6cf45740df370

		this.props.asynGetArticlesByTopicMiddle(topic);
		hashHistory.push('/articles');
	}
}
export default SidebarComponent