import actionTypes, * as actions from '../src/actions';

test('createForm returns the correct action', () => {
  const action = actions.createForm('login');
  expect(action).toEqual({
    type: actionTypes.CREATE_FORM,
    formName: 'login'
  });
});

test('updateFormError returns the correct action', () => {
  const action = actions.updateFormError('login', 'invalid');
  expect(action).toEqual({
    type: actionTypes.UPDATE_FORM_ERROR,
    formName: 'login',
    error: 'invalid'
  });
});

test('startValidatingForm returns the correct action', () => {
  const action = actions.startValidatingForm('login');
  expect(action).toEqual({
    type: actionTypes.UPDATE_FORM_IS_VALIDATING,
    formName: 'login',
    isValidating: true
  });
});

test('finishValidatingForm returns the correct action', () => {
  const action = actions.finishValidatingForm('login');
  expect(action).toEqual({
    type: actionTypes.UPDATE_FORM_IS_VALIDATING,
    formName: 'login',
    isValidating: false
  });
});

test('startSubmitting returns the correct action', () => {
  const action = actions.startSubmitting('login');
  expect(action).toEqual({
    type: actionTypes.UPDATE_FORM_IS_SUBMITTING,
    formName: 'login',
    isSubmitting: true
  });
});

test('finishSubmitting returns the correct action', () => {
  const action = actions.finishSubmitting('login');
  expect(action).toEqual({
    type: actionTypes.UPDATE_FORM_IS_SUBMITTING,
    formName: 'login',
    isSubmitting: false
  });
});

test('createField returns the correct action', () => {
  const action = actions.createField('login', 'username', 'superuser');
  expect(action).toEqual({
    type: actionTypes.CREATE_FIELD,
    formName: 'login',
    fieldName: 'username',
    initialValue: 'superuser'
  });
});

test('updateFieldValue returns the correct action', () => {
  const action = actions.updateFieldValue('login', 'username', 'admin');
  expect(action).toEqual({
    type: actionTypes.UPDATE_FIELD_VALUE,
    formName: 'login',
    fieldName: 'username',
    value: 'admin'
  });
});

test('updateFieldError returns the correct action', () => {
  const action = actions.updateFieldError('login', 'username', 'invalid');
  expect(action).toEqual({
    type: actionTypes.UPDATE_FIELD_ERROR,
    formName: 'login',
    fieldName: 'username',
    error: 'invalid'
  });
});

test('startValidatingField returns the correct action', () => {
  const action = actions.startValidatingField('login', 'username');
  expect(action).toEqual({
    type: actionTypes.UPDATE_FIELD_IS_VALIDATING,
    formName: 'login',
    fieldName: 'username',
    isValidating: true
  });
});

test('finishValidatingField returns the correct action', () => {
  const action = actions.finishValidatingField('login', 'username');
  expect(action).toEqual({
    type: actionTypes.UPDATE_FIELD_IS_VALIDATING,
    formName: 'login',
    fieldName: 'username',
    isValidating: false
  });
});
