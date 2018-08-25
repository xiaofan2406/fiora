/* @flow */
import * as React from 'react';

import { createFiora } from '../../src';

const { Form, Field } = createFiora();

type ProfileProps = {
  profile: {},
  updateProfile: (profile: {}) => {},
};

const Profile = ({ profile, updateProfile }: ProfileProps) => (
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

export default Profile;