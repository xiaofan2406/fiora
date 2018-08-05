/* @flow */
export const getValues = (fields: { [string]: FieldState }) =>
  Object.keys(fields).reduce(
    (values, fieldName) => ({
      ...values,
      [fieldName]: fields[fieldName].value,
    }),
    {}
  );

export const getFieldValue = (fieldName: string, state: FormState) =>
  state.fields[fieldName] ? state.fields[fieldName].value : undefined;

export const getInitialValues = (initialValues?: KeyedObject) =>
  initialValues
    ? Object.keys(initialValues).reduce(
        (values, fieldName) => ({
          ...values,
          [fieldName]: {
            // TODO clone
            value: initialValues[fieldName],
          },
        }),
        {}
      )
    : {};

export const fieldUpdater = (name: string, partial: KeyedObject = {}) => (
  state: FormState
) => ({
  fields: {
    ...state.fields,
    [name]: {
      ...state.fields[name],
      ...partial,
      isTouched: true,
    },
  },
});

export const DEFAULT_VALUE = '';

export const DEFAULT_ERROR = null;

/**
 * always default value to empty string to avoid React warning
 * always default error to null to ?
 */
export const DEFAULT_FIELD = {
  value: DEFAULT_VALUE,
  error: DEFAULT_ERROR,
};
