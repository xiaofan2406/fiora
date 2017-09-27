import React from 'react';
import Fiora, { Field } from 'fiora';
import { login } from 'utils/api';
import Aux from './Aux';
import Input from './Input';

function Login() {
  return (
    <Fiora
      name="Login"
      validate={async data => {
        const errors = {};
        if (data.username.length < 5) {
          errors.username = 'hum...need more than 5 characters';
        }
        if (data.email.indexOf('@') === -1) {
          errors.email = 'hum...need a valid email';
        }
        return errors;
      }}
      onSubmit={async values => {
        const res = await login(values);
        if (res.error.match('username')) {
          return { username: res.error };
        }
        return {};
      }}
    >
      {({ handleSubmit }) => (
        <Aux>
          <Field name="username">
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
          <Field name="email">
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
      )}
    </Fiora>
  );
}

export default Login;
