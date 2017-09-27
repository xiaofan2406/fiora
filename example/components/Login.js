import React from 'react';
import Fiora, { Field } from 'fiora';
import { login } from 'utils/api';
import Aux from './Aux';
import Input from './Input';

class Login extends React.Component {
  get = () => {};
  render() {
    console.log('render Login');
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
            feedbacks.username = 'LGTM';
          }
          return { errors, feedbacks };
        }}
        onSubmit={login}
      >
        {({ handleSubmit }) => {
          console.log('render the form');
          return (
            <Aux>
              <Field name="username">
                {({ value, handleChange }) => {
                  console.log('render username Field');
                  return (
                    <Input
                      type="text"
                      value={value}
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
}

export default Login;
