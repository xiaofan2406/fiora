/* @flow */
import * as React from 'react';
import { signUp } from 'utils/api';
import {
  usernameValidation,
  passwordValidation,
  passwordRepeatValidation,
} from 'utils/validations';
import { Input } from 'widgets';
import createForm from 'fiora/Fiora';

const { Form, Field } = createForm();

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
    <Field name="username" onValidate={usernameValidation}>
      {({
        value,
        error,
        isTouched,
        isValidating,
        handleChange,
        handleValidate,
      }) => (
        <Input
          data-testid="usernameInput"
          label="Username"
          value={value}
          error={error}
          isTouched={isTouched}
          isValidating={isValidating}
          onChange={event => {
            handleChange(event.target.value);
            handleValidate();
          }}
        />
      )}
    </Field>
    <Field name="password" onValidate={passwordValidation}>
      {({
        value,
        error,
        isTouched,
        isValidating,
        handleChange,
        handleValidate,
      }) => (
        <Input
          data-testid="passwordInput"
          label="Password"
          value={value}
          error={error}
          isTouched={isTouched}
          isValidating={isValidating}
          onChange={event => {
            handleChange(event.target.value);
          }}
          onBlur={handleValidate}
        />
      )}
    </Field>
    <Field name="passwordRepeat" onValidate={passwordRepeatValidation}>
      {({
        value,
        error,
        isTouched,
        isValidating,
        handleChange,
        handleValidate,
      }) => (
        <Input
          data-testid="passwordRepeatInput"
          label="Confirm password"
          value={value}
          error={error}
          isTouched={isTouched}
          isValidating={isValidating}
          onChange={event => {
            handleChange(event.target.value);
          }}
          onBlur={handleValidate}
        />
      )}
    </Field>
    <button type="submit">submit</button>
  </Form>
);

export default SignUp;
