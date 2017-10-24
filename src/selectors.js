import { getFormFieldKey } from './helpers';

const makeGetFormMeta = meta => (state, { formName }) =>
  state.fiora.forms[formName][meta];

export const getFormFields = makeGetFormMeta('fields');
export const getFormError = makeGetFormMeta('error');
export const getIsFormValidating = makeGetFormMeta('isValidating');
export const getIsFormSubmitting = makeGetFormMeta('isSubmitting');

const makeGetFieldMeta = meta => (state, { formName, fieldName }) =>
  state.fiora.fields[getFormFieldKey(formName, fieldName)][meta];

export const getFieldValue = makeGetFieldMeta('value');
export const getFieldError = makeGetFieldMeta('error');
export const getIsFieldValidating = makeGetFieldMeta('isValidating');
export const getIsFieldTouched = makeGetFieldMeta('isTouched');

export const getFormValues = (state, { formName }) => {
  const formValues = {};
  getFormFields(state, { formName }).forEach(fieldName => {
    formValues[fieldName] = getFieldValue(state, { formName, fieldName });
  });
  return formValues;
};
