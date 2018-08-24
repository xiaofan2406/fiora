/* @flow */
import React from 'react';
import { Input } from 'widgets';
import { signUp } from 'utils/api';
import {
  usernameValidation,
  passwordValidation,
  passwordRepeatValidation,
} from 'utils/validations';
import createForm from 'fiora/Fiora';

const { Form, Field } = createForm();

const signUpSubmit = async (data: { username: string, password: string }) => {
  const res = await signUp(data);
  if (res.status === 200) {
    console.log('Sign up successful!');
    return null;
  }
  console.log(res.errors);
  return res.errors;
};
const Contact = () => (
  <Form
    onSubmit={signUpSubmit}
    onReset={() => {
      console.log('reseted');
    }}
    data-testid="signUpForm"
  >
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
    <button type="reset">Reset</button>
    <button type="submit">Submit</button>
  </Form>
);

export default Contact;
