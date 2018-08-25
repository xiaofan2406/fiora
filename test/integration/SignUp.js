/* @flow */
import * as React from 'react';

import { createFiora } from '../../src';

const { Form, Field } = createFiora();

export const usernameValidation = (username: string) => {
  if (!username) {
    return 'Username is required';
  }
  if (username.length < 5) {
    return 'Username should be as least 5 characters';
  }
  return null;
};

export const passwordValidation = (password: string) => {
  if (!password) {
    return 'Password is required';
  }
  if (password.length < 6) {
    return 'Password should be as least 6 characters';
  }
  return null;
};

export const passwordRepeatValidation = (password: string) => (
  passwordRepeat: string
) => {
  const baseError = passwordValidation(passwordRepeat);

  if (baseError) return baseError;

  if (passwordRepeat !== password) {
    return 'Passwords do not match';
  }

  return null;
};

export const delay = (ms: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export const signUpRequest = async ({
  username,
  password,
}: {
  username: string,
  password: string,
}) => {
  await delay(500);
  const errors = {};
  if (username === 'admin') {
    errors.username = 'Invalid username';
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
  const res = await signUpRequest(data);
  if (res.status === 200) {
    console.log('Sign up successful!');
    return null;
  }
  console.log(res.errors);
  // return res.errors;
  return undefined;
};

export const signUpReset = () => {
  console.log('reset');
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
      {password => (
        <Field
          name="passwordRepeat"
          onValidate={passwordRepeatValidation(password.value)}
        >
          {passwordRepeat => (
            <>
              <input
                data-testid="passwordInput"
                value={password.value}
                onChange={event => {
                  password.handleChange(event.currentTarget.value);
                }}
                onBlur={password.handleValidate}
              />
              {password.isTouched && password.error ? (
                <span data-testid="passwordError">
                  error: {JSON.stringify(password.error)}
                </span>
              ) : null}

              <input
                data-testid="passwordRepeatInput"
                value={passwordRepeat.value}
                onChange={event => {
                  passwordRepeat.handleChange(event.currentTarget.value);
                }}
                onBlur={passwordRepeat.handleValidate}
              />
              {passwordRepeat.isTouched && passwordRepeat.error ? (
                <span data-testid="passwordRepeatError">
                  error: {JSON.stringify(passwordRepeat.error)}
                </span>
              ) : null}
            </>
          )}
        </Field>
      )}
    </Field>

    <button type="reset">Reset</button>
    <button type="submit">Submit</button>
  </Form>
);

export default SignUp;
