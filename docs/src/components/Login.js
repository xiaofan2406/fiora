import React from 'react';
import Fiora, { Field, FormMeta, Submit } from 'fiora';
import styled from 'react-emotion';
import { api, delay } from 'utils';
import Input from './Input';

const Container = styled('div')`
  width: 640px;
  margin: auto;
`;

function Login() {
  return (
    <Container>
      <Fiora
        name="Login"
        onValidate={async data => {
          if (data.username === data.password) {
            return { form: 'username and password cannot be the same' };
          }
          return {};
        }}
        onSubmit={api.login}
      >
        <Field
          name="username"
          onValidate={async username => {
            await delay(500);
            return username.length < 5
              ? 'hum...need more than 5 characters'
              : null;
          }}
        >
          {({
            value,
            error,
            handleChange,
            handleValidate,
            isValidating,
            isTouched
          }) => (
            <Input
              type="text"
              label="Username"
              value={value}
              error={error}
              onBlur={handleValidate}
              isValidating={isValidating}
              isTouched={isTouched}
              onChange={event => handleChange(event.target.value)}
            />
          )}
        </Field>
        <Field
          name="password"
          onValidate={async password => {
            await delay(500);
            return password.length < 6
              ? 'hum...need more than 6 characters'
              : null;
          }}
        >
          {({
            value,
            error,
            handleChange,
            handleValidate,
            isValidating,
            isTouched
          }) => (
            <Input
              type="password"
              label="Password"
              value={value}
              error={error}
              onBlur={handleValidate}
              isValidating={isValidating}
              isTouched={isTouched}
              onChange={event => handleChange(event.target.value)}
            />
          )}
        </Field>
        <FormMeta isValidating isSubmitting error>
          {meta => (
            <div>
              Meta: <span>{JSON.stringify(meta)}</span>
            </div>
          )}
        </FormMeta>
        <Submit>
          {({ handleSubmit }) => <button onClick={handleSubmit}>Submit</button>}
        </Submit>
      </Fiora>
    </Container>
  );
}

export default Login;
