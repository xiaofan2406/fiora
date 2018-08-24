/* @flow */
type KeyedObject = { [string]: any };

declare type FormProps = {
  children: React$Node,
  onSubmit: (formData: KeyedObject) => KeyedObject | void,
  onValidate?: (formData: KeyedObject) => KeyedObject | void,
  onReset?: () => void,
  initialValues?: KeyedObject,
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

declare type ContextProvider = React$ComponentType<{
  value: any,
  children?: React$Node,
}>;

declare type ContextConsumer = React$ComponentType<{
  children: (props: any) => React$Node,
}>;

type FieldChangeHandler = (newValue: mixed) => void | Promise<void>;

type FioraFieldState = {
  isValidating: boolean,
};

declare type FieldChildrenProps = FieldState &
  FioraFieldState & {
    handleChange: FieldChangeHandler,
    handleValidate: () => void,
  };

/**
 * Props passed in by users on each Field
 */
declare type FieldProps = {
  name: string,
  onValidate?: (value: mixed) => mixed,
  children: (props: FieldChildrenProps) => React$Node,
};

declare type FioraFieldProps = FieldProps & {
  updateField: (fieldName: string, newValue: mixed) => void,
  registerField: (fieldName: string, info: {}) => void,
  validateField: (fieldName: string) => void,
} & FieldState;

type SubmitChildrenProps = {
  handleSubmit: (formData: KeyedObject) => KeyedObject,
};

declare type SubmitProps = {
  children: (props: SubmitChildrenProps) => React$Node,
};
