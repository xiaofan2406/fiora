/* @flow */
export const getValues = (fields: { [string]: FieldState }) =>
  Object.keys(fields).reduce(
    (values, fieldName) => ({
      ...values,
      [fieldName]: fields[fieldName].value,
    }),
    {}
  );
