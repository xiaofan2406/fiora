import React from 'react';
import Fiora, { Field, FormError } from 'fiora';
import { login } from 'utils/api';
import Aux from './Aux';
import Input from './Input';

function Login() {
  return (
    <Fiora
      name="Login"
      onValidate={async data => {
        if (data.username === data.email) {
          return { form: 'username and email cannot be the same' };
        }
        return {};
      }}
      onSubmit={async values => {
        const res = await login(values);
        console.log(res.error);
        if (res.error && res.error.match('username')) {
          return { username: res.error };
        }
        return {};
      }}
    >
      {({ handleSubmit }) => (
        <Aux>
          <FormError>
            {({ formError }) => (
              <div>{formError && <span>Error: {formError}</span>}</div>
            )}
          </FormError>
          <Field
            name="username"
            onValidate={async username =>
              username.length < 5 ? 'hum...need more than 5 characters' : null}
          >
            {({ value, error, handleChange, handleValidate }) => {
              console.log('render username Field');
              return (
                <Input
                  type="text"
                  value={value}
                  error={error}
                  onBlur={handleValidate}
                  onChange={event => {
                    handleChange(event.target.value);
                  }}
                />
              );
            }}
          </Field>
          <Field
            name="email"
            onValidate={async email =>
              email.indexOf('@') === -1 ? 'hum...need a valid email' : null}
          >
            {({ value, error, handleChange, handleValidate }) => {
              console.log('render email Field');
              return (
                <Input
                  type="email"
                  value={value}
                  error={error}
                  onBlur={handleValidate}
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
