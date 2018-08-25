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

export const fieldUpdater = (name: string, partial: KeyedObject = {}) => (
  state: FormState
) =>
  name === 'form'
    ? {
        fields: {
          ...state.fields,
          [name]: {
            ...state.fields[name],
            ...partial,
          },
        },
      }
    : {
        fields: {
          ...state.fields,
          [name]: {
            ...state.fields[name],
            ...partial,
            // Any field updates will consider touching the field
            isTouched: true,
          },
          form: {},
        },
      };
