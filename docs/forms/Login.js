import * as React from 'react';
import { login } from 'utils/api';
import createForm from 'fiora/Fiora';

const { Form, Field } = createForm('login');

class Login extends React.Component<{}> {
  render() {
    return (
      <Form onSubmit={login}>
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
            onValidate={(value, formData) => {
              console.log(formData);
              return value.length < 5 ? 'Wrong' : null;
            }}
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
