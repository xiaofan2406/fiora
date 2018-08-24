/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import {
  updateProfile as updateProfileAction,
  getProfile,
} from 'store/profile';
import createForm from 'fiora/Fiora';

const { Form, Field } = createForm();

type AboutProps = {
  profile: {},
  updateProfile: (profile: {}) => {},
};

const About = ({ updateProfile, profile }: AboutProps) => (
  <Form onSubmit={updateProfile} initialValues={profile}>
    <Field name="name">
      {({ value, handleChange }) => (
        <input
          value={value}
          onChange={event => {
            handleChange(event.target.value);
          }}
        />
      )}
    </Field>
    <Field name="role">
      {({ value, error, handleChange }) => (
        <input
          value={value}
          error={error}
          onChange={event => {
            handleChange(event.target.value);
          }}
        />
      )}
    </Field>
    <button type="submit">submit</button>
  </Form>
);

const mapState = state => ({
  profile: getProfile(state),
});

export default connect(
  mapState,
  { updateProfile: updateProfileAction }
)(About);
