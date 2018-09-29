import Editor from '../components/Editor';

## Tutorial

This tutorial will demonstrate how to build a simple user login form with Fiora.

#### Create a form

First thing we will need to do is to import the factory function and create an instance of the fiora form.

<!-- prettier-ignore -->
```js
import createFiora from 'fiora';

const { Form, Field } = createFiora();

const LoginForm = () => (
  <Form>
    {/* All Fields goes here */}
  </Form>
);
```

`Form` and `Field` are the two essential components we need to start building.

#### Add a username field

Now lets add a username field, by simply using the Field component with a render function.

```jsx
<Form>
  <Field name="username">
    {({ value, updateValue }) => (
      <>
        <label>Username: </label>
        <input
          type="text"
          value={value}
          onChange={({ target: { value } }) => {
            updateValue(value); // updates the value
          }}
        />
      </>
    )}
  </Field>
</Form>
```

To render a simplest field, you will want to use `value` together with `updateValue`.

The `updateValue` function is expecting a param as the new value to update the field with.

#### Add validation to username field

For this login form, we want to do some client side validation before we actually login the user.

We want to ensure the username is at least 3 characters long, and password is at least 6 characters long.

To add validation rules, we can use the `onValidate` prop on the Field component.

```jsx
<Form onValidate={(data) => }>
  <Field
    name="username"
    onValidate={username => (username.length < 3 ? 'Invalid username' : null)}
  >
    {({ value, updateValue, validate }) => (
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={value}
          onChange={({ target: { value } }) => {
            updateValue(value); // updates the value
            validate(); // triggers the validation
          }}
        />
      </div>
    )}
  </Field>
</Form>
```

#### Add error feedback

We have validation set in place, but we still need to show the error.

We will use the `error` value from the render props.

```jsx
<Form>
  <Field
    name="username"
    onValidate={username => (username.length < 3 ? 'Invalid username' : null)}
  >
    {({ value, updateValue, validate, error }) => (
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={value}
          onChange={({ target: { value } }) => {
            updateValue(value); // updates the value
            validate(); // triggers the validation
          }}
        />
        {error ? <div>{error}</div> : null}
      </div>
    )}
  </Field>
</Form>
```

#### Add a password field

Now we have a working username field, let's add a password field following the same pattern.

But let's trigger the password validation only when the input is blurred.

```jsx
<Form>
  {/* ... username Field */}
  <Field
    name="password"
    onValidate={password => (password.length < 6 ? 'Invalid password' : null)}
  >
    {({ value, updateValue, validate, error }) => (
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={value}
          onChange={({ target: { value } }) => {
            updateValue(value);
          }}
          onBlur={validate}
        />
        {error ? <div>{error}</div> : null}
      </div>
    )}
  </Field>
</Form>
```

#### Add a submit handler

Now our username and password fields are working, and the value are updating.

In order the use the values from the form, we will need to add a `onSubmit` handler.

Normally the `onSubmit` handler is where you send the login network request to your API.

For demo purpose, we will just log out the values.

```jsx
<Form
  onSubmit={({ username, password }) =>
    console.log(`${username} login successfully!`)
  }
>
  {/* fields */}
  <button type="submit">Login</button>
</Form>
```

#### Finishing

<Editor>

```jsx
<Form
  onSubmit={({ username, password }) => {
    console.log(`${username} login successfully!`);
  }}
>
  <Field
    name="username"
    onValidate={username => (username.length < 3 ? 'Invalid username' : null)}
  >
    {({ value, updateValue, validate, error }) => (
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={value}
          onChange={({ target: { value } }) => {
            updateValue(value); // updates the value
            validate(); // triggers the validation
          }}
        />
        {error ? <div>{error}</div> : null}
      </div>
    )}
  </Field>
  <Field
    name="password"
    onValidate={password => (password.length < 6 ? 'Invalid password' : null)}
  >
    {({ value, updateValue, validate, error }) => (
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={value}
          onChange={({ target: { value } }) => {
            updateValue(value);
          }}
          onBlur={validate}
        />
        {error ? <div>{error}</div> : null}
      </div>
    )}
  </Field>
  <button type="submit">Login</button>
</Form>
```

</Editor>
