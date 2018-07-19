import * as React from 'react';

import createForm from 'fiora/Fiora';

const { Form, Field } = createForm('login');

const wait = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

const loginReqeust = async ({ username, password }) => {
  await wait(500);
  if (username.length < 5) {
    return { username: 'Invalid username' };
  }

  if (username === password) {
    return { form: 'Username and password should be different' };
  }
  return undefined;
};

class Login extends React.Component<{}> {
  render() {
    return (
      <Form onSubmit={loginReqeust}>
        <label htmlFor="username">
          Username:
          <Field name="username">
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
        <label htmlFor="password">
          Password:
          <Field
            name="password"
            onValidate={value => (value.length < 5 ? 'Wrong' : null)}
          >
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
  }
}

export default Login;
