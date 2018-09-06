/* @flow */
type PlainObject = { [string]: any };

type ErrorObject = PlainObject | void | null;

/**
 * Props passed in by users on the Form
 */
declare type FormProps = {
  children: React$Node,

  onSubmit: (formData: PlainObject) => ErrorObject | Promise<ErrorObject>,

  onReset?: () => void,

  onValidate?: (formData: PlainObject) => ErrorObject | Promise<ErrorObject>,

  initialValues?: PlainObject,
}; // support all HTML form attributes

declare type FieldRenderProps = {|
  value: any,
  error: any,
  isTouched: boolean,
  isValidating: boolean,
  updateValue: (newValue: any) => void,
  validate: () => void,
|};

/**
 * Props passed in by users on the Field
 */
declare type FieldProps = {|
  name: string,
  onValidate?: (value: any) => any | Promise<any>,
  children: (props: FieldRenderProps) => React$Node,
|};

declare type FormMetaRenderProps = {|
  error: any,
  isValidating: boolean,
  isSubmitting: boolean,
  isTouched: boolean,
  isValid: boolean,
|};

declare type FormMetaProps = {|
  children: (props: FormMetaRenderProps) => React$Node,
|};

// =================== Internal =============

declare type InternalFieldState = {|
  value: $PropertyType<FieldRenderProps, 'value'>,
  error: $PropertyType<FieldRenderProps, 'error'>,
  isTouched: $PropertyType<FieldRenderProps, 'isTouched'>,
|};

declare type ContextProvider = React$ComponentType<{
  value: any,
  children?: React$Node,
}>;

declare type ContextConsumer = React$ComponentType<{
  children: (props: any) => React$Node,
}>;
