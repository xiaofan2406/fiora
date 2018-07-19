/* @flow */
type FormError = { [string]: mixed } | void;

declare type FormProps = {
  children: React$Node,
  onSubmit: (data: { [string]: mixed }) => FormError,
}; // support all HTML form attributes, except `name`

declare type FieldState = {
  value: mixed,
  error: mixed,
  isTouched: boolean,
};

declare type FormState = {
  fields: { [string]: FieldState },
  updateField: (fieldName: string, partial: {}) => void,
  registerField: (fieldName: string, info: {}) => void,
};

declare type ContextProvider = React$ComponentType<{ value: any }>;

declare type ContextConsumer = React$ComponentType<{
  children: (props: any) => React$Node,
}>;

type FieldChangeHandler = (newValue: mixed) => void | Promise<void>;

declare type FieldChildrenProps = FieldState & {
  handleChange: FieldChangeHandler,
};

type FieldOnValidate = (value: mixed) => mixed;

declare type FieldProps = {
  name: string,
  onValidate?: FieldOnValidate,
  children: (props: FieldChildrenProps) => React$Node,
};

declare type FioraFieldProps = FieldProps & {
  updateField: (fieldName: string, partial: {}) => void,
  registerField: (fieldName: string, info: {}) => void,
} & FieldState;

type SubmitChildrenProps = {
  handleSubmit: (formData: { [string]: mixed }) => { [string]: mixed },
};

declare type SubmitProps = {
  children: (props: SubmitChildrenProps) => React$Node,
};
