import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import Spinner from '../common/Spinner';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { getProfileByHandle } from '../../actions/profileActions';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === undefined && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }
  
  render() {
    const { profile, loading } = this.props.profile;
    const { auth } = this.props;
    let profileContent;
    
    if (profile === undefined || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles" className="btn btn-light mb-3 float-left" >Back to Profiles</Link>
              {console.log(profile.user._id, auth.user.id)}
              {profile.user._id === auth.user.id ? undefined : 
                <button
                  className="btn btn-primary mb-3 float-left" 
                  role="button"
                >Follow</button>
              }
            </div>
            <div className="col-md-6"></div>
          </div>
          <ProfileHeader profile={profile} />
          <ProfileAbout profile={profile} />
          <ProfileCreds education={profile.education} experience={profile.experience} />
           {profile.githubusername ? <ProfileGithub username={profile.githubusername} /> : undefined}
        </div>
      );
    }
    
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileByHandle } )(Profile);
