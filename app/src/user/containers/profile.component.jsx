import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import NavigationComponent from '../../core/components/navigation.component.jsx';
import BaseInfoComponent from '../components/baseInfo.component.jsx';
import EditProfileComponent from '../components/editprofile.component.jsx';
import * as profileActions from '../actions/profile.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

require('../../../styles/profile.style.css');
class ProfileComponent extends React.Component{

  constructor() {
    super();
  }

  render() {

      return (
            <div>
              <NavigationComponent />
              <div className='title-panel'>
                <div>
                  <span>{this.props.editBaseInfo ?  'EDIT PROFILE' : 'MY PROFILE'}</span>
                </div>
              </div>
              {(() => {
                      if(this.props.editBaseInfo){
                        return (
                                 <EditProfileComponent {...this.props}/>
                                );
                      }else{
                        return (
                                <div className='profile-content mdl-grid'>
                                  <div className='mdl-cell--6-col profile-layer'>
                                    <BaseInfoComponent {...this.props} />
                                    <div className="demo-card-wide mdl-card mdl-shadow--2dp profile-container">
                                      <div className="mdl-card__title">
                                        <h2 className="mdl-card__title-text">My Post</h2>
                                      </div>
                                      <div className="mdl-card__supporting-text">
                                        <hr />
                                        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
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
                                        <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                                          <i className="material-icons">edit</i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='mdl-cell--6-col profile-layer'>
                                    <div className="demo-card-wide mdl-card mdl-shadow--2dp profile-container">
                                      <div className="mdl-card__title">
                                        <h2 className="mdl-card__title-text">My Tags</h2>
                                      </div>
                                      <div className="mdl-card__supporting-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Mauris sagittis pellentesque lacus eleifend lacinia...
                                      </div>
                                      <div className="mdl-card__menu">
                                        <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                                          <i className="material-icons">edit</i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                               );
                      }
              })()}
            </div>


             )

  }
}

function mapStateToProps(state) {
  return {
    editBaseInfo: state.editBaseInfo
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(profileActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);

