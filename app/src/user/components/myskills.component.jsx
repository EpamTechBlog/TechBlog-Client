import React from "react";
import $ from "jquery";
import cookie from 'react-cookie';

class MySkillsComponent extends React.Component{

	constructor() {
		super();
		this.state = { isLoadingProfile : true, mySkills : [] };
	}

	componentDidMount(){

		$.ajax({
            url: 'http://localhost:8000/users/' + cookie.load('userId'),
            dataType: 'json',
            type: "GET",
            cache: false,
            success: function(data) {

              setTimeout(() => {this.setState({ isLoadingProfile : false, mySkills : data.skills })}, 500);

            }.bind(this),
            error: function(xhr, status, err) {
              console.error(error, err.toString());
            }.bind(this)
          });
		

	}

	render() {
		var skills = this.state.mySkills.map(function(skill){
			return (
						<span className="mdl-badge mdl-badge--overlap" data-badge="♥">{skill}</span>
					)
		});
		return(
				<div className="demo-card-wide mdl-card mdl-shadow--2dp profile-container">
                  <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">My Skills</h2>
                  </div>
                  <div className="mdl-card__supporting-text">
                    {skills}
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
}

export default MySkillsComponent