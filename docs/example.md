```js
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
        if (res.error && res.error.match('username')) {
          return { username: res.error };
        }
        return {};
      }}
    >
      {({ handleSubmit }) => (
        <div>
          <Field
            name="username"
            onValidate={async username =>
              username.length < 5 ? 'hum...need more than 5 characters' : null}
          >
            {({ value, error, handleChange, handleValidate }) => (
              <Input
                type="text"
                value={value}
                error={error}
                onBlur={handleValidate}
                onChange={event => {
                  handleChange(event.target.value);
                }}
              />
            )}
          </Field>
          <Field
            name="email"
            onValidate={async email =>
              email.indexOf('@') === -1 ? 'hum...need a valid email' : null}
          >
            {({ value, error, handleChange, handleValidate }) => (
              <Input
                type="email"
                value={value}
                error={error}
                onBlur={handleValidate}
                onChange={event => {
                  handleChange(event.target.value);
                }}
              />
            )}
          </Field>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </Fiora>
  );
}
```
