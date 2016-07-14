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

		let topics = this.state.topics.map((topic) =>{

			if(store.getState().topic == topic.topicName)
				return (
								<span className="mdl-navigation__link selected" key={Math.random()} onClick={this.goToTopic.bind(this,topic.topicName)}>
									<i className="material-icons">{topic.icon}</i>
									{topic.topicName}
								</span>
	 							)
	 		else
	 			return (
	 							<span className="mdl-navigation__link" key={Math.random()} onClick={this.goToTopic.bind(this,topic.topicName)}>
		 							<i className="material-icons">{topic.icon}</i>
		 							{topic.topicName}
	 							</span>
	 							)
		});

		return (
			<div>
				
				<div className="demo-drawer mdl-layout__drawer ">

					<nav className="demo-navigation mdl-navigation ">

						{topics}
					</nav>
				</div>
			</div>

			)
	}


	logout() {
		cookie.remove('username', { path: '/' });
		cookie.remove('userId', { path: '/' });
		this.setState({username : undefined, userId : undefined});
	}

	goToTopic(topic){
		this.props.asynGetArticlesByTopicMiddle(topic);
		hashHistory.push('/articles');
	}
}
export default SidebarComponent