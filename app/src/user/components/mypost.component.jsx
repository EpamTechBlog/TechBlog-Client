import React from 'react';

class MyPostComponent extends React.Component{

	constructor() {
		super();
		this.state = { isLoadingProfile : true };
	}

	componentDidMount(){

		setTimeout(() => {this.setState({ isLoadingProfile : false })}, 1000);

	}

	render() {
		return (
				<div className="demo-card-wide mdl-card mdl-shadow--2dp profile-container">
	                  <div className="mdl-card__title">
	                    <h2 className="mdl-card__title-text">My Post</h2>
	                  </div>
	                  <div className="mdl-card__supporting-text clean-top-padding">
	                    <br/>
	                    <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp profile-table">
	                      <thead>
	                        <tr>
	                          <th className="mdl-data-table__cell--non-numeric">Posts</th>
	                          <th>Created Date</th>
	                          <th>Last Updated Date</th>
	                        </tr>
	                      </thead>
	                      <tbody>
	                        <tr>
	                          <td className="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
	                          <td>25</td>
	                          <td>$2.90</td>
	                        </tr>
	                        <tr>
	                          <td className="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
	                          <td>50</td>
	                          <td>$1.25</td>
	                        </tr>
	                        <tr>
	                          <td className="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
	                          <td>10</td>
	                          <td>$2.35</td>
	                        </tr>
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
}

export default MyPostComponent