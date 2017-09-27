import { getFormFieldKey } from './utils/helpers';

// not really a selector
export const getFieldValue = (state, { formName, fieldName }) =>
  state.fiora.fieldValue[getFormFieldKey({ formName, fieldName })];

export const getFormFields = (state, { formName }) =>
  state.fiora.formFields[formName];

export const getFormValues = (state, { formName }) => {
  const formValues = {};
  const formFields = getFormFields(state, { formName });

  for (const fieldName of formFields) {
    formValues[fieldName] = getFieldValue(state, { formName, fieldName });
  }
  return formValues;
};
