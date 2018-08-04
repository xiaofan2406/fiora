import React from 'react';
import { connect } from 'react-redux';
import {
  updateProfile as updateProfileAction,
  getProfile,
} from 'store/profile';

import createForm from 'fiora/Fiora';

const { Form, Field } = createForm('profile');

const About = ({ updateProfile, profile }) => (
  <Form onSubmit={updateProfile} initialValues={profile}>
    <label htmlFor="name">
      name:
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
    </label>
    <br />
    <label htmlFor="role">
      role:
      <Field name="role">
        {({ value, error, handleChange, isTouched }) => (
          <>
            <input
              value={value}
              onChange={event => {
                handleChange(event.target.value);
              }}
            />
            {isTouched && error ? <div>{JSON.stringify(error)}</div> : null}
          </>
        )}
      </Field>
      <br />
      <button type="submit">submit</button>
    </label>
  </Form>
);

const mapState = state => ({
  profile: getProfile(state),
});

export default connect(
  mapState,
  { updateProfile: updateProfileAction }
)(About);
