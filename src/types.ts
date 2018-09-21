type Mixed = string | number | {} | null | undefined;
type PlainObject = { [key: string]: Mixed };

type ErrorObject = PlainObject | null | undefined;

/**
 * Props passed in by users on the Form
 */
type FormProps = {
  children: React.ReactNode;

  onSubmit: (formData: PlainObject) => ErrorObject | Promise<ErrorObject>;

  onReset?: () => void;

  onValidate?: (formData: PlainObject) => ErrorObject | Promise<ErrorObject>;

  initialValues?: PlainObject;
}; // support all HTML form attributes

type FieldRenderProps = {
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
interface FieldProps {
  name: string;
  onValidate?: (value: any) => any | Promise<any>;
  children: (props: FieldRenderProps) => React.ReactNode;
}

type FormMetaRenderProps = {
  error: any;
  isValidating: boolean;
  isSubmitting: boolean;
  isTouched: boolean;
  isValid: boolean;
};

type FormMetaProps = {
  children: (props: FormMetaRenderProps) => React.ReactNode;
};

// =================== Internal =============

type InternalFieldInfo = {
  validator: (value: any) => Promise<any>;
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
  fields: { [key: string]: InternalFieldState };
  registerField: (fieldName: string, info: InternalFieldInfo) => void;
  updateValue: (fieldName: string, value: any) => void;
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
