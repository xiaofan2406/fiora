type FieldValue = any;
type FieldError = any;
type FormValues = Record<string, FieldValue>;
type FormErrors = Record<string, FieldError> | null | undefined;

/**
 * From props. Supports all HTML form attributes
 */
interface FormProps {
  initialValues?: FormValues;

  children: React.ReactNode;

  onSubmit?: (formValues: FormValues) => FormErrors | Promise<FormErrors>;

  onReset?: () => void;

  onValidate?: (formValues: FormValues) => FormErrors | Promise<FormErrors>;
}

/**
 * Field children render props.
 */
type FieldRenderProps = {
  value: FieldValue;
  error: FieldError;
  isTouched: boolean;
  isValidating: boolean;
  updateValue: (newValue: FieldValue) => void;
  validate: () => void;
};

/**
 * Field props.
 */
interface FieldProps {
  name: string;
  onValidate?: (value: FieldValue) => FieldError | Promise<FieldError>;
  children: (props: FieldRenderProps) => React.ReactNode;
}

/**
 * FormMeta children render props.
 */
type FormMetaRenderProps = {
  error: FieldError;
  isValidating: boolean;
  isSubmitting: boolean;
  isTouched: boolean;
  isValid: boolean;
};

/**
 * FormMeta props.
 */
interface FormMetaProps {
  children: (props: FormMetaRenderProps) => React.ReactNode;
}

/*
  ================================================
  =================== Internal ===================
  ================================================
*/

type InternalFieldInfo = {
  validator: (value: FieldValue) => Promise<FieldError>;
};

type InternalFieldState = {
  value: FieldRenderProps['value'];
  error: FieldRenderProps['error'];
  isTouched: FieldRenderProps['isTouched'];
};

type FormState = {
  error: FormMetaRenderProps['error'];
  isValidating: FormMetaRenderProps['isValidating'];
  isSubmitting: FormMetaRenderProps['isSubmitting'];
  fields: Record<string, InternalFieldState>;
  registerField: (fieldName: string, info: InternalFieldInfo) => void;
  updateValue: (fieldName: string, value: FieldValue) => void;
  validateField: (fieldName: string) => void;
};

type ContextProvider = React.ComponentType<React.ProviderProps<FormState>>;

type ContextConsumer = React.ComponentType<React.ConsumerProps<FormState>>;

type FioraFieldProps = FieldProps & {
  updateValue: FormState['updateValue'];
  registerField: FormState['registerField'];
  validateField: FormState['validateField'];
} & InternalFieldState;

type FioraFieldState = {
  isValidating: FieldRenderProps['isValidating'];
};

type FioraFormMetaProps = {
  children: FormMetaProps['children'];
  error: FormMetaRenderProps['error'];
  isValidating: FormMetaRenderProps['isValidating'];
  isSubmitting: FormMetaRenderProps['isSubmitting'];
  isTouched: FormMetaRenderProps['isTouched'];
  isValid: FormMetaRenderProps['isValid'];
};
