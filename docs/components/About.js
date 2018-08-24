/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import {
  updateProfile as updateProfileAction,
  getProfile,
} from 'store/profile';
import { Profile } from '../forms';

type AboutProps = {
  profile: {},
  updateProfile: (profile: {}) => {},
};

const About = ({ updateProfile, profile }: AboutProps) => (
  <Profile updateProfile={updateProfile} profile={profile} />
);

const mapState = state => ({
  profile: getProfile(state),
});

export default connect(
  mapState,
  { updateProfile: updateProfileAction }
)(About);
