const actionTypes = {
  CREATE_FORM: '@fiora/CREATE_FORM',
  CREATE_FIELD: '@fiora/CREATE_FIELD',
  UPDATE_FIELD_VALUE: '@fiora/UPDATE_FIELD_VALUE',
  SET_ERROR: '@fiora/SET_ERROR'
};

export default actionTypes;

export const createForm = formName => ({
  type: actionTypes.CREATE_FORM,
  payload: { formName }
});

export const createField = (formName, fieldName) => ({
  type: actionTypes.CREATE_FIELD,
  payload: {
    formName,
    fieldName
  }
});

export const updateFieldValue = (formName, fieldName, value) => ({
  type: actionTypes.UPDATE_FIELD_VALUE,
  payload: {
    formName,
    fieldName,
    value
  }
});

export const setErrors = (formName, errors) => dispatch =>
  Object.keys(errors).map(fieldName =>
    dispatch({
      type: actionTypes.SET_ERROR,
      payload: {
        formName,
        fieldName,
        error: errors[fieldName]
      }
    })
  );
