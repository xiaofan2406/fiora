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
export const getIsFieldTouched = makeGetFieldMeta('isTouched');
export const getIsFieldValidating = makeGetFieldMeta('isValidating');

export const getFormValues = (state, { formName }) => {
  const formValues = {};
  getFormFields(state, { formName }).forEach(fieldName => {
    formValues[fieldName] = getFieldValue(state, { formName, fieldName });
  });
  return formValues;
};

export const getIsFormTouched = (state, { formName }) =>
  getFormFields(state, { formName }).some(fieldName =>
    getIsFieldTouched(state, { formName, fieldName })
  );

export const getFormHasError = (state, { formName }) =>
  getFormFields(state, { formName })
    .map(fieldName => getFieldError(state, { formName, fieldName }))
    .concat([getFormError(state, { formName })])
    .some(error => error);
