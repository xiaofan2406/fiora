export const getFormFieldKey = (formName, fieldName) =>
  `${fieldName}@${formName}`;

// To avoid the error of changing uncontrolled component to controlled component,
// all fields should have a default value that is not undefined.
// It cannot be `null` either
export const DEFAULT_FIELD_VALUE = '';

// Default error value is meant to be a representation of `no error`
export const DEFAULT_ERROR = null;

export const FORM_AS_FIELD_NAME = 'form';
