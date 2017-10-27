The objective of this tutorial is to create a simple login form with `fiora`.

#### 1. Create a form

To start, simply creat a component that renders a `Fiora` component. The `Fiora` component represents a form conceptually.

Every fiora form in the whole application must have a unique name.

```jsx
import Fiora from 'fiora';

const SimpleLogin = () => (
  <Fiora name="login">
    ...
  </Fiora>
);
```

> Technically the name must be unique per redux store.

#### 2. Add some fields

All the fields in a form must be rendered inside the `Fiora` component. To create a field, we need `Field` component

Every `Field` must have a unique name within a `Fiora` form.

```jsx
<Field name="username">
  ...
</Field>
```

`Field` does not render html elements. It simply provides the data and functionalities for a field.

It is expecting a `children` (*function*). The `children` function must return valid renderable data.

The function has a single param (*object*) that has `value` and `handleChange` property.

`handleChange` is a function that controls updating the value of the field. It is expecting the new value as its param.

`value` is the actual value of the field.

Lets render a simple html `input` element for the username field.

```jsx
<Field name="username">
  {({ value, handleChange }) => (
    <input
      type="text"
      value={value}
      onChange={event => handleChange(event.target.value)}
    />
  )}
</Field>
```

Follow the same structure, we can add another password field.

#### 4. Add a `onSubmit` for the form

`Fiora` also expects a `onSubmit` function. The function takes the all the form fields value as a param (*object*).

It can optionally return an error object. For now we return nothing for simpliciy.

```jsx
import React from 'react';
import Fiora, { Field } from 'fiora';

const loginRequest = (formValues) => {
  console.log('Login successful', formValues);
}

const SimpleLogin = () => (
  <Fiora name="login" onSubmit={loginRequest}>
    ...
  </Fiora>
);
```

#### 3. Add a submit button

Rendering a submit button with `fiora` is also implemented following the `render prop` pattern like `Field`.

`Submit` component is expecting a function as its children. The function has a single param (*object*) that has `handlSubmit` property.

`handleSubmit` is a function that will trigger the form submission.

```jsx
<Submit>
  {({ handleSubmit }) => <button onClick={handleSubmit}>Log in</button>}
</Submit>
```

#### 4. Putting them together

We now have

```jsx
import React from 'react';
import Fiora, { Field, Submit } from 'fiora';

const loginRequest = formValues => {
  console.log('Login successful', formValues);
};

const SimpleLogin = () => (
  <Fiora name="login" onSubmit={loginRequest}>
    <Field name="username">
      {({ value, handleChange }) => (
        <input
          type="text"
          value={value}
          onChange={event => handleChange(event.target.value)}
        />
      )}
    </Field>
    <Field name="password">
      {({ value, handleChange }) => (
        <input
          type="password"
          value={value}
          onChange={event => handleChange(event.target.value)}
        />
      )}
    </Field>
    <Submit>
      {({ handleSubmit }) => <button onClick={handleSubmit}>Log in</button>}
    </Submit>
  </Fiora>
);

export default SimpleLogin;
```


