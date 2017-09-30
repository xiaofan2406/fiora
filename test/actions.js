import actionTypes, * as actions from '../src/actions';

const formName = 'login';
const fieldName = 'username';
const value = 'admin';
const error = 'something went wrong';

test('createForm returns the correct action', () => {
  const action = actions.createForm(formName);
  expect(action).toHaveProperty('type', actionTypes.CREATE_FORM);
  expect(action).toHaveProperty('formName', formName);
});

test('createField returns the correct action', () => {
  const action = actions.createField(formName, fieldName);
  expect(action).toHaveProperty('type', actionTypes.CREATE_FIELD);
  expect(action).toHaveProperty('formName', formName);
  expect(action).toHaveProperty('fieldName', fieldName);
});

test('updateFieldValue returns the correct action', () => {
  const action = actions.updateFieldValue(formName, fieldName, value);
  expect(action).toHaveProperty('type', actionTypes.UPDATE_FIELD_VALUE);
  expect(action).toHaveProperty('formName', formName);
  expect(action).toHaveProperty('fieldName', fieldName);
  expect(action).toHaveProperty('value', value);
});

test('updateError returns the correct action', () => {
  const action = actions.updateError(formName, fieldName, error);
  expect(action).toHaveProperty('type', actionTypes.UPDATE_ERROR);
  expect(action).toHaveProperty('formName', formName);
  expect(action).toHaveProperty('fieldName', fieldName);
  expect(action).toHaveProperty('error', error);
});
