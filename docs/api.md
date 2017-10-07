### API

### `<Fiora name onSubmit [onValidate]>{children}</Fiora>`

Creates a fiora form.

#### Props

- `name` (String): The name of the form. This name must be unique accross all the firoa forms in your application

- `onSubmit(formValues): formErrors`: An async function that describe the form submition logic. It can return(resolve) a `formError` object.

- `onValidate(formValues): formErrors`: An async function that describe the form validation logic. It should return(resolve) a `formError` object.

- `children({ handleSubmit }): ReactComponent`: A function returns an a valid React component

  - `handleSubmit()` (Function): A function that will trigger form validations and `onSubmit`.

#### Terms

- `formValues` (Object)

  The keys will be determined by the `Field`s returned from `children` function.

  The key name matches the Field name and value be the Field's value

- `formErrors` (Object)

  Similar with `formValues`, the key-value pair will be the Field's name-error pair.

### `<Field name [onValidate]>{children}</Field>`

Create a fiora field

#### Props

- `name` (String): The name of the field. This name must be unique inside a single `Fiora` form

- `onValidate(fieldValue): fieldError`: An async function that describe the field validation logic. It should return(resolve) a `fieldError`

- `children({ value, error, handleChange, handleValidate }): ReactComponent`: A function returns an a valid React component

  - `value` (Any): The value of the field

  - `error` (Any): The error of the field

  - `handleValidate` (Function): A function that will trigger the field validation

  - `handleChange(fieldValue)` (Function): A function that will set the value of field to the given `fieldValue`

#### Terms

- `fieldError` (Any): Any value you wish to be recorded as the field's error

- `fieldValue` (Any): Any value you wish to be recorded as the field's value
