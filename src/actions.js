const actionTypes = {
  CREATE_FORM: '@fiora/CREATE_FORM',
  UPDATE_FORM_ERROR: '@fiora/UPDATE_FORM_ERROR',
  UPDATE_FORM_IS_VALIDATING: '@fiora/UPDATE_FORM_IS_VALIDATING',
  UPDATE_FORM_IS_SUBMITTING: '@fiora/UPDATE_FORM_IS_SUBMITTING',

  CREATE_FIELD: '@fiora/CREATE_FIELD',
  UPDATE_FIELD_VALUE: '@fiora/UPDATE_FIELD_VALUE',
  UPDATE_FIELD_ERROR: '@fiora/UPDATE_FIELD_ERROR',
  UPDATE_FIELD_IS_VALIDATING: '@fiora/UPDATE_FIELD_IS_VALIDATING'
};

export default actionTypes;

export const createForm = formName => ({
  type: actionTypes.CREATE_FORM,
  formName
});

export const updateFormError = (formName, error) => ({
  type: actionTypes.UPDATE_FORM_ERROR,
  formName,
  error
});

export const startValidatingForm = formName => ({
  type: actionTypes.UPDATE_FORM_IS_VALIDATING,
  formName,
  isValidating: true
});

export const finishValidatingForm = formName => ({
  type: actionTypes.UPDATE_FORM_IS_VALIDATING,
  formName,
  isValidating: false
});

export const startSubmitting = formName => ({
  type: actionTypes.UPDATE_FORM_IS_SUBMITTING,
  formName,
  isSubmitting: true
});

export const finishSubmitting = formName => ({
  type: actionTypes.UPDATE_FORM_IS_SUBMITTING,
  formName,
  isSubmitting: false
});

export const createField = (formName, fieldName, initialValue) => ({
  type: actionTypes.CREATE_FIELD,
  formName,
  fieldName,
  initialValue
});

export const updateFieldValue = (formName, fieldName, value) => ({
  type: actionTypes.UPDATE_FIELD_VALUE,
  formName,
  fieldName,
  value
});

export const updateFieldError = (formName, fieldName, error) => ({
  type: actionTypes.UPDATE_FIELD_ERROR,
  formName,
  fieldName,
  error
});

export const startValidatingField = (formName, fieldName) => ({
  type: actionTypes.UPDATE_FIELD_IS_VALIDATING,
  formName,
  fieldName,
  isValidating: true
});

export const finishValidatingField = (formName, fieldName) => ({
  type: actionTypes.UPDATE_FIELD_IS_VALIDATING,
  formName,
  fieldName,
  isValidating: false
});
