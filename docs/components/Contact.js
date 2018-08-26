/* @flow */
import React from 'react';
import { Input, Loader } from 'widgets';
import { delay, signUp } from 'utils/api';
import {
  usernameValidation,
  passwordValidation,
  passwordRepeatValidation,
} from 'utils/validations';
import { createFiora } from 'fiora';

const { Form, Field, FormMeta } = createFiora();

const signUpSubmit = async (data: { username: string, password: string }) => {
  const res = await signUp(data);
  if (res.status === 200) {
    console.log('Sign up successful!');
    return null;
  }
  return res.errors;
};

const Contact = () => (
  <Form
    onSubmit={signUpSubmit}
    onValidate={() => delay(2000)}
    onReset={() => {
      console.log('reset');
    }}
    data-testid="signUpForm"
  >
    <FormMeta>
      {({ error, isValidating, isSubmitting }) => (
        <>
          <div>{error}</div>
          {isValidating ? <Loader color="orange" size={32} /> : null}
          {isSubmitting ? <Loader color="green" size={32} /> : null}
        </>
      )}
    </FormMeta>
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
      {password => (
        <Field
          name="passwordRepeat"
          onValidate={passwordRepeatValidation(password.value)}
        >
          {passwordRepeat => (
            <>
              <Input
                data-testid="passwordInput"
                label="Password"
                value={password.value}
                error={password.error}
                isTouched={password.isTouched}
                isValidating={password.isValidating}
                onChange={event => {
                  password.handleChange(event.target.value);
                }}
                onBlur={password.handleValidate}
              />
              <Input
                data-testid="passwordRepeatInput"
                label="Confirm password"
                value={passwordRepeat.value}
                error={passwordRepeat.error}
                isTouched={passwordRepeat.isTouched}
                isValidating={passwordRepeat.isValidating}
                onChange={event => {
                  passwordRepeat.handleChange(event.target.value);
                }}
                onBlur={passwordRepeat.handleValidate}
              />
            </>
          )}
        </Field>
      )}
    </Field>

    <button type="reset">Reset</button>
    <button type="submit">Submit</button>
  </Form>
);

export default Contact;
