import React from 'react';
import PropTypes from 'prop-types';
import createFiora from '../../src';

const { Form, Field, FormMeta } = createFiora();

class SignUp extends React.Component {
  static propTypes = {
    usernameValidation: PropTypes.func,
    passwordValidation: PropTypes.func,
    passwordRepeatValidation: PropTypes.func,
    formSubmit: PropTypes.func,
    formValidate: PropTypes.func,
  };

  render() {
    const {
      formSubmit,
      formValidate,
      usernameValidation,
      passwordValidation,
      passwordRepeatValidation,
    } = this.props;
    return (
      <>
        <Form
          onSubmit={formSubmit}
          onValidate={formValidate}
          data-testid="signUpForm"
        >
          <FormMeta>
            {({ error }) =>
              error ? <div data-testid="formError">{error}</div> : null
            }
          </FormMeta>
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
      </>
    );
  }
}

export default SignUp;
