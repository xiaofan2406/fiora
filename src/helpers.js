/* @flow */
export const getValues = (fields: { [string]: FieldState }) =>
  Object.keys(fields).reduce(
    (values, fieldName) => ({
      ...values,
      [fieldName]: fields[fieldName].value,
    }),
    {}
  );

export const getInitialValues = (initialValues: KeydObject) =>
  initialValues
    ? Object.keys(initialValues).reduce(
        (values, fieldName) => ({
          ...values,
          [fieldName]: {
            value: initialValues[fieldName],
          },
        }),
        {}
      )
    : {};
