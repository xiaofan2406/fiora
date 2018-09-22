export const getFormValues = (fields: FormState['fields']) =>
  Object.keys(fields).reduce(
    (reduced, fieldName) => ({
      ...reduced,
      [fieldName]: fields[fieldName].value,
    }),
    {}
  );

export const getFieldValue = (fieldName: string, state: FormState) =>
  state.fields[fieldName] ? state.fields[fieldName].value : undefined;

function cloneValue(value: FieldValue): FieldValue {
  if (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'symbol' ||
    typeof value === 'function' ||
    value == null
  ) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(item => cloneValue(item));
  }

  // assume value is now an object
  return Object.keys(value).reduce(
    (reduced, key) => ({
      ...reduced,
      [key]: cloneValue(value[key]),
    }),
    {}
  );
}

export function getInitialValues(initialValues?: FormValues) {
  return initialValues
    ? Object.keys(initialValues).reduce(
        (reduced, fieldName) => ({
          ...reduced,
          [fieldName]: {
            value: cloneValue(initialValues[fieldName]),
          },
        }),
        {}
      )
    : {};
}
