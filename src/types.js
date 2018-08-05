/* @flow */
type KeydObject = { [string]: mixed };

declare type FormProps = {
  children: React$Node,
  onSubmit: (formData: KeydObject) => KeydObject | void,
  onValidate?: (formData: KeydObject) => KeydObject | void,
  initialValues?: KeydObject,
}; // support all HTML form attributes, except `name`

declare type FieldState = {
  value: mixed,
  error?: mixed,
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
  handleValidate: () => void,
};

type FieldOnValidate = (value: mixed) => mixed;

/**
 * Props passed in by users on each Field
 */
declare type FieldProps = {
  name: string,
  onValidate?: FieldOnValidate,
  children: (props: FieldChildrenProps) => React$Node,
};

declare type FioraFieldProps = FieldProps & {
  updateField: (fieldName: string, newValue: mixed) => void,
  registerField: (fieldName: string, info: {}) => void,
  validateField: (fieldName: string, onValidate: FieldOnValidate) => void,
} & FieldState;

type SubmitChildrenProps = {
  handleSubmit: (formData: KeydObject) => KeydObject,
};

declare type SubmitProps = {
  children: (props: SubmitChildrenProps) => React$Node,
};
