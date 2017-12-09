## API

### `Fiora`

#### Props

##### `name` (_string_) **required**:

The name of the form. This name must be unique accross all the firoa forms per
`redux` store.

##### `onSubmit` (_function_) **required**: `async (formValues) => formErrors`

A function that describes the form submission logic. It can return (resolve) a
`formErrors`.

##### `onValidate` (_function_): `async (formValues) => formErrors`

A function that describes the form validation logic. It should return (resolve)
a `formErrors`.

##### `children` (_node_) **required**:

Any valid React node.

#### Definitions

##### `formValues` (_object_)

Using the example code in tutorial, `onSubmit` and `onValidate` will be invoke
with `formValues` in the shape of:

```
{
  username: 'superuser',
  password: 'verysecure'
}
```

The keys of the the object matches the `name` prop of the `Field`s in the
`Fiora` form.

##### `formErrors` (_object_)

Using the example code in tutorial, `onSubmit` and `onValidate` can return:

```
{
  username: 'Forbidden username',
  password: 'Insecure password',
  form: 'Incomplete'
}
```

The keys of the the object matches the `name` prop of the `Field`s in the
`Fiora` form.

In addition, a key name can also be `form` to indicate error for the form
itself. This error can be retrieved via `FormMeta` component

The values of the object will be set as their errors accordingly. Any falsy
value will be discarded.

### `Field`

#### Props

##### `name` (_string_) **required**:

The name of the field. This name must be unique inside a single `Fiora` form. It
also must not equal to the string `form`.

##### `onValidate` (_function_): `async (fieldValue) => fieldError`

A function that describes the field validation logic. It should return (resolve)
a `fieldError`

##### `children` (_function_) **required**: `({ value, error, isValidating, isTouched, handleChange, handleValidate }) => node`

A function returns a valid React node

* `value` (_any_): The value of the field
* `error` (_any_): The error of the field
* `isValidating` (_boolean_): A boolean indicating if the field's `onValidate`
  is running
* `isTouched` (_boolean_): A boolean indicating if the field's `value` has ever
  changed
* `handleValidate()` (_function_): A function that triggers `onValidate`
* `handleChange(newValue)` (_function_): A function that sets the `value` of
  field to the given `newValue`

#### Definitions

##### `fieldError` (_any_):

Any value you wish to be recorded as the field's error. Falsy values will be
discarded.

##### `fieldValue` (_any_):

Any value you wish to be recorded as the field's value.

### `Submit`

#### Props

##### `children` (_function_) **required**: `({ handleSubmit }) => node`

A function returns an valid React node.

* `handleSubmit` (_function_): A function that triggers form validations and the
  `onSubmit` prop on `Fiora`.

### `FormMeta`

#### Props

##### `error` (_boolean_):

Indicating if the children function is subscribed to the form error.

##### `isValidating` (_boolean_):

Indicating if the children function is subscribed to the form validation status.

##### `isSubmitting` (_boolean_):

Indicating if the children function is subscribed to the form submission status.

##### `children` (_function_) **required**: `(meta) => node`

A function returns a valid React nod. `meta` will be decided by boolean flags
set on `FormMeta`.

For example:

```jsx
<FormMeta isValidating error>
  {meta => <div />}
</FormMeta>
```

Here the `meta` will have two properties `isValidating` and `error`, and their
values indicating the actual validation status and error for the `Fiora` form,
not the boolean flag value.
