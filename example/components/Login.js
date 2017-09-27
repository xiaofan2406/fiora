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
        console.log(data);
        const errors = {};
        const feedbacks = {};
        if (data.username.length < 5) {
          errors.username = 'hum...need more than 5 characters';
        } else {
          feedbacks.username = 'A very good username';
        }
        if (data.email.indexOf('@') === -1) {
          errors.email = 'hum...need a valid email';
        } else {
          feedbacks.email = 'A very good email';
        }
        return { errors, feedbacks };
      }}
      onSubmit={login}
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
