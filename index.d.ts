import * as React from 'react';

export type Mixed = string | number | {} | null | undefined;
export type PlainObject = { [key: string]: Mixed };

export type ErrorObject = PlainObject | null | undefined;

/**
 * Props passed in by users on the Form
 */
export type FormProps = {
  children: React.ReactNode;

  onSubmit: (formData: PlainObject) => ErrorObject | Promise<ErrorObject>;

  onReset?: () => void;

  onValidate?: (formData: PlainObject) => ErrorObject | Promise<ErrorObject>;

  initialValues?: PlainObject;
}; // support all HTML form attributes

export type FieldRenderProps = {
  value: any;
  error: any;
  isTouched: boolean;
  isValidating: boolean;
  updateValue: (newValue: any) => void;
  validate: () => void;
};

/**
 * Props passed in by users on the Field
 */
export interface FieldProps {
  name: string;
  onValidate?: (value: any) => any | Promise<any>;
  children: (props: FieldRenderProps) => React.ReactNode;
}

export type FormMetaRenderProps = {
  error: any;
  isValidating: boolean;
  isSubmitting: boolean;
  isTouched: boolean;
  isValid: boolean;
};

export type FormMetaProps = {
  children: (props: FormMetaRenderProps) => React.ReactNode;
};

// =================== Internal =============

export type InternalFieldInfo = {
  validator: (value: any) => Promise<any>;
};

export type InternalFieldState = {
  value: FieldRenderProps['value'];
  error: FieldRenderProps['error'];
  isTouched: FieldRenderProps['isTouched'];
};

export type ContextProvider = React.ComponentType<
  React.ProviderProps<FormState>
>;

// export type ContextConsumer = React.ComponentType<
//   React.ConsumerProps<FormState>
// >;

export type ContextConsumer = string;

export type FormState = {
  error: FormMetaRenderProps['error'];
  isValidating: FormMetaRenderProps['isValidating'];
  isSubmitting: FormMetaRenderProps['isSubmitting'];
  fields: { [key: string]: InternalFieldState };
  registerField: (fieldName: string, info: InternalFieldInfo) => void;
  updateValue: (fieldName: string, value: any) => void;
  validateField: (fieldName: string) => void;
};

export type FioraFieldProps = FieldProps & {
  updateValue: FormState['updateValue'];
  registerField: FormState['registerField'];
  validateField: FormState['validateField'];
} & InternalFieldState;

export type FioraFieldState = {
  isValidating: FieldRenderProps['isValidating'];
};

export type FioraFormMetaProps = {
  children: FormMetaProps['children'];
  error: FormMetaRenderProps['error'];
  isValidating: FormMetaRenderProps['isValidating'];
  isSubmitting: FormMetaRenderProps['isSubmitting'];
  isTouched: FormMetaRenderProps['isTouched'];
  isValid: FormMetaRenderProps['isValid'];
};

export const createFiora: () => {
  Form: React.ComponentClass<FormProps>;
  Field: React.StatelessComponent<FieldProps>;
  FormMeta: React.StatelessComponent<FormMetaProps>;
};

export default createFiora;
