import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import NavigationComponent from '../../core/components/navigation.component.jsx';
import BaseInfoComponent from '../components/baseInfo.component.jsx';
import EditProfileComponent from '../components/editprofile.component.jsx';
import MyPostComponent from '../components/mypost.component.jsx';
import MySkillsComponent from '../components/myskills.component.jsx';
import MyCommentedBlogComponent from '../components/mycommentedblog.component.jsx';
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
              <div className='profile-title-panel'>
                <div className='profile-title-div'>
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
                                    <BaseInfoComponent {...this.props}/>
                                    <MyPostComponent/>
                                  </div>
                                  <div className='mdl-cell--6-col profile-layer'>
                                    <MySkillsComponent {...this.props}/>
                                    <MyCommentedBlogComponent/>
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

