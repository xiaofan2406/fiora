import React from 'react';
import Fiora, { Field, FormError } from 'fiora';
import { login } from 'utils/api';
import Aux from './Aux';
import Input from './Input';

function Login() {
  return (
    <Fiora
      name="Login"
      validate={async data => {
        let formError;
        if (data.username === data.email) {
          formError = 'username and email cannot be the same';
        }
        return { form: formError };
      }}
      onSubmit={async values => {
        const res = await login(values);
        if (res.error.match('username')) {
          return { username: res.error };
        }
        return {};
      }}
    >
      {({ handleSubmit }) => {
        console.log('render the form');
        return (
          <Aux>
            <FormError>
              {({ formError }) => (
                <div>{formError && <span>Error: {formError}</span>}</div>
              )}
            </FormError>
            <Field
              name="username"
              validate={async username =>
                username.length < 5
                  ? 'hum...need more than 5 characters'
                  : null}
            >
              {({ value, error, handleChange }) => {
                console.log('render username Field');
                return (
                  <Input
                    type="text"
                    value={value}
                    error={error}
                    onChange={event => {
                      handleChange(event.target.value);
                    }}
                  />
                );
              }}
            </Field>
            <Field
              name="email"
              validate={async email =>
                email.indexOf('@') === -1 ? 'hum...need a valid email' : null}
            >
              {({ value, error, handleChange }) => {
                console.log('render email Field');
                return (
                  <Input
                    type="email"
                    value={value}
                    error={error}
                    onChange={event => {
                      handleChange(event.target.value);
                    }}
                  />
                );
              }}
            </Field>
            <button onClick={handleSubmit}>Submit</button>
          </Aux>
        );
      }}
    </Fiora>
  );
}

export default Login;
