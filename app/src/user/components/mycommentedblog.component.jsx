import React from "react";

class MyCommentedBlogComponent extends React.Component{

	constructor() {
		super();
		this.state = { isLoadingProfile : true };
	}

	componentDidMount(){

		setTimeout(() => {this.setState({ isLoadingProfile : false })}, 2500);

	}

	render() {

		return(
				<div className="demo-card-wide mdl-card mdl-shadow--2dp profile-container">
                  <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">My Comments</h2>
                  </div>
                  <div className="mdl-card__supporting-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
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

export default MyCommentedBlogComponent