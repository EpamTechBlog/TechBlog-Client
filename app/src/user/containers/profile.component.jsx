import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import NavigationComponent from '../../core/components/navigation.component.jsx';
import BaseInfoComponent from '../components/baseInfo.component.jsx';
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
                  <span>MY PROFILE</span>
                </div>
              </div>
              <div className='profile-content mdl-grid'>

                <div className='mdl-cell--6-col profile-layer'>
                  <BaseInfoComponent {...this.props} />
                </div>
                <div className='mdl-cell--6-col profile-layer'>
                  <div className="demo-card-wide mdl-card mdl-shadow--2dp profile-container">
                    <div className="mdl-card__title">
                      <h2 className="mdl-card__title-text">Welcome</h2>
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

