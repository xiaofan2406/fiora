/* @flow */
import * as React from 'react';

import createForm from '../../src/Fiora';

const { Form, Field } = createForm();

export const usernameValidation = username => {
  if (!username) {
    return 'Username is required';
  }
  if (username.length < 5) {
    return 'Username should be as least 5 characters';
  }
  return null;
};

export const passwordValidation = password => {
  if (!password) {
    return 'Password is required';
  }
  if (password.length < 6) {
    return 'Password should be as least 6 characters';
  }
  return null;
};

export const passwordRepeatValidation = password => {
  if (!password) {
    return 'Please confirm your password';
  }
  return null;
};

export const delay = (ms: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export const signUpReqeust = async ({
  username,
  password,
}: {
  username: string,
  password: string,
}) => {
  await delay(500);
  const errors = {};
  if (username === 'admin') {
    errors.username = 'Invalid useranme';
  }
  if (password === 'password') {
    errors.password = 'Password is insecure';
  }
  if (username === password) {
    errors.form = 'Password should not be similar to username';
  }
  return Object.keys(errors).length > 0
    ? { status: 400, errors }
    : { status: 200 };
};

export const signUpSubmit = async (data: {
  username: string,
  password: string,
}) => {
  const res = await signUpReqeust(data);
  if (res.status === 200) {
    console.log('Sign up successful!');
    return null;
  }
  console.log(res.errors);
  return res.errors;
};

export const signUpReset = () => {
  console.log('reseted');
};

const SignUp = () => (
  <Form onSubmit={signUpSubmit} onReset={signUpReset} data-testid="signUpForm">
    <Field name="username" onValidate={usernameValidation}>
      {({ value, error, isTouched, handleChange, handleValidate }) => (
        <>
          <input
            data-testid="usernameInput"
            value={value}
            onChange={event => {
              handleChange(event.currentTarget.value);
              handleValidate();
            }}
          />
          {isTouched && error ? (
            <span data-testid="usernameError">
              error: {JSON.stringify(error)}
            </span>
          ) : null}
        </>
      )}
    </Field>
    <Field name="password" onValidate={passwordValidation}>
      {({ value, error, isTouched, handleChange, handleValidate }) => (
        <>
          <input
            data-testid="passwordInput"
            value={value}
            onChange={event => {
              handleChange(event.currentTarget.value);
            }}
            onBlur={handleValidate}
          />
          {isTouched && error ? (
            <span data-testid="passwordError">
              error: {JSON.stringify(error)}
            </span>
          ) : null}
        </>
      )}
    </Field>
    <Field name="passwordRepeat" onValidate={passwordRepeatValidation}>
      {({ value, error, isTouched, handleChange, handleValidate }) => (
        <>
          <input
            data-testid="passwordRepeatInput"
            value={value}
            onChange={event => {
              handleChange(event.currentTarget.value);
            }}
            onBlur={handleValidate}
          />
          {isTouched && error ? (
            <span data-testid="passwordRepeatError">
              error: {JSON.stringify(error)}
            </span>
          ) : null}
        </>
      )}
    </Field>
    <button type="reset">Reset</button>
    <button type="submit">Submit</button>
  </Form>
);

export default SignUp;
