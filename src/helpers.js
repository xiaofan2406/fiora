/* @flow */
import type { FormState } from './formFactory';

export const getFormValues = (fields: $PropertyType<FormState, 'fields'>) =>
  Object.keys(fields).reduce(
    (reduced, fieldName) => ({
      ...reduced,
      [fieldName]: fields[fieldName].value,
    }),
    {}
  );

export const getFieldValue = (fieldName: string, state: FormState) =>
  state.fields[fieldName] ? state.fields[fieldName].value : undefined;

export const getInitialValues = (initialValues?: KeyedObject) =>
  initialValues
    ? Object.keys(initialValues).reduce(
        (reduced, fieldName) => ({
          ...reduced,
          [fieldName]: {
            // TODO clone
            value: initialValues[fieldName],
          },
        }),
        {}
      )
    : {};
