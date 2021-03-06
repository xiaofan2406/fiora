import * as React from 'react';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type NativeFormProps = Omit<
  React.FormHTMLAttributes<HTMLFormElement>,
  'children' | 'onSubmit' | 'onReset'
>;

type FieldValue = any;
type FieldError = any;
type FormValues = Record<string, FieldValue>;
type FormErrors = Record<string, FieldError> | null | undefined;

/**
 * From props. Supports all HTML form attributes
 */
export interface FormProps extends NativeFormProps {
  initialValues?: FormValues;

  children: React.ReactNode;

  onSubmit?: (formValues: FormValues) => FormErrors | Promise<FormErrors>;

  onReset?: (event: React.FormEvent<HTMLFormElement>) => void;

  onValidate?: (formValues: FormValues) => FormErrors | Promise<FormErrors>;
}

/**
 * Field children render props.
 */
export interface FieldRenderProps {
  value: FieldValue;
  error: FieldError;
  isTouched: boolean;
  isValidating: boolean;
  updateValue: (newValue: FieldValue) => void;
  validate: () => void;
}

/**
 * Field props.
 */
export interface FieldProps {
  name: string;
  onValidate?: (value: FieldValue) => FieldError | Promise<FieldError>;
  children: (props: FieldRenderProps) => React.ReactNode;
}

/**
 * FormMeta children render props.
 */
export interface FormMetaRenderProps {
  error: FieldError;
  isValidating: boolean;
  isSubmitting: boolean;
  isTouched: boolean;
  isValid: boolean;
}

/**
 * FormMeta props.
 */
export interface FormMetaProps {
  children: (props: FormMetaRenderProps) => React.ReactNode;
}

export function createFiora(): {
  Form: React.ComponentClass<FormProps>;
  Field: React.StatelessComponent<FieldProps>;
  FormMeta: React.StatelessComponent<FormMetaProps>;
};

export default createFiora;
