/* @flow */
import * as React from 'react';

import createFiora from '../../src';

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

const delay = (ms: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

const signUpRequest = async ({ username, password }) => {
  await delay(200);
  const errors = {};
  if (username === 'admin') {
    errors.username = 'Username not allowed';
  }
  if (password === 'password') {
    errors.password = 'Password is insecure';
  }

  return Object.keys(errors).length > 0
    ? { status: 400, errors }
    : { status: 200 };
};

export const signUpReset = () => {
  console.log('reset');
};

class SignUp extends React.Component<{}, { success: boolean }> {
  state = {
    success: false,
  };

  handleSubmit = async (data: { username: string, password: string }) => {
    const res = await signUpRequest(data);
    if (res.status === 200) {
      this.setState({ success: true });
      return null;
    }
    console.log(res.errors);
    return res.errors;
  };

  validate = (data: { username: string, password: string }) =>
    data.username === data.password
      ? { form: 'Password should not be similar to username' }
      : null;

  render() {
    const { success } = this.state;
    return (
      <>
        <Form
          onSubmit={this.handleSubmit}
          onReset={signUpReset}
          onValidate={this.validate}
          data-testid="signUpForm"
        >
          <Field name="username" onValidate={usernameValidation}>
            {({ value, error, isTouched, updateValue, validate }) => (
              <>
                <input
                  data-testid="usernameInput"
                  value={value}
                  onChange={event => {
                    updateValue(event.currentTarget.value);
                    validate();
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
                        password.updateValue(event.currentTarget.value);
                      }}
                      onBlur={password.validate}
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
                        passwordRepeat.updateValue(event.currentTarget.value);
                      }}
                      onBlur={passwordRepeat.validate}
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

          <button type="reset" data-testid="reset">
            Reset
          </button>
          <button type="submit" data-testid="submit">
            Submit
          </button>
        </Form>
        {success ? <div data-testid="response">Sign up successful!</div> : null}
      </>
    );
  }
}

export default SignUp;
