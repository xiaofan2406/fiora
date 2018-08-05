/* @flow */
import * as React from 'react';
import { signUp } from 'utils/api';
import {
  usernameValidation,
  passwordValidation,
  passwordRepeatValidation,
} from 'utils/validations';
import createForm from 'fiora/Fiora';

const { Form, Field } = createForm('signUp');

const signUpSubmit = async data => {
  const res = await signUp(data);
  if (res.status === 200) {
    console.log('Sign up successful!');
    return null;
  }
  console.log(res.errors);
  return res.errors;
};

const SignUp = () => (
  <Form onSubmit={signUpSubmit} data-testid="signUpForm">
    <label htmlFor="username">Username</label>
    <Field name="username" onValidate={usernameValidation}>
      {({ value, error, isTouched, handleChange, handleValidate }) => (
        <>
          <input
            data-testid="usernameInput"
            value={value}
            onChange={event => {
              handleChange(event.target.value);
              handleValidate();
            }}
          />
          {isTouched && error ? (
            <div data-testid="usernameError">{JSON.stringify(error)}</div>
          ) : null}
        </>
      )}
    </Field>
    <br />

    <label htmlFor="password">password:</label>
    <Field name="password" onValidate={passwordValidation}>
      {({ value, error, isTouched, handleChange, handleValidate }) => (
        <>
          <input
            data-testid="passwordInput"
            value={value}
            onChange={event => {
              handleChange(event.target.value);
            }}
            onBlur={handleValidate}
          />
          {isTouched && error ? (
            <div data-testid="passwordError">{JSON.stringify(error)}</div>
          ) : null}
        </>
      )}
    </Field>
    <br />

    <label htmlFor="passwordRepeat">Confirm password:</label>
    <Field name="passwordRepeat" onValidate={passwordRepeatValidation}>
      {({ value, error, isTouched, handleChange, handleValidate }) => (
        <>
          <input
            data-testid="passwordRepeatInput"
            value={value}
            onChange={event => {
              handleChange(event.target.value);
            }}
            onBlur={handleValidate}
          />
          {isTouched && error ? (
            <div data-testid="passwordRepeateError">
              {JSON.stringify(error)}
            </div>
          ) : null}
        </>
      )}
    </Field>
    <br />

    <button type="submit">submit</button>
  </Form>
);

export default SignUp;
