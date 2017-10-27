import React from 'react';
import Fiora, { Field, Submit } from 'fiora';

const loginRequest = formValues => {
  console.log('Login successful', formValues);
};

const SimpleLogin = () => (
  <Fiora name="login" onSubmit={loginRequest}>
    <Field name="username">
      {({ value, handleChange }) => (
        <input
          type="text"
          value={value}
          onChange={event => handleChange(event.target.value)}
        />
      )}
    </Field>
    <Field name="password">
      {({ value, handleChange }) => (
        <input
          type="password"
          value={value}
          onChange={event => handleChange(event.target.value)}
        />
      )}
    </Field>
    <Submit>
      {({ handleSubmit }) => <button onClick={handleSubmit}>Log in</button>}
    </Submit>
  </Fiora>
);

export default SimpleLogin;
