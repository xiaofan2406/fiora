import actionTypes, * as actions from '../src/actions';

test('createForm returns the correct action', () => {
  const formName = 'userLogin';
  const action = actions.createForm(formName);

  expect(action.type).toBe(actionTypes.CREATE_FORM);
  expect(action.payload).toBeTruthy();
  expect(action.payload.formName).toBe(formName);
});

test('createField returns the correct action', () => {
  const formName = 'userLogin';
  const fieldName = 'username';
  const action = actions.createField(formName, fieldName);

  expect(action.type).toBe(actionTypes.CREATE_FIELD);
  expect(action.payload).toBeTruthy();
  expect(action.payload.formName).toBe(formName);
  expect(action.payload.fieldName).toBe(fieldName);
});

test('updateFieldValue returns the correct action', () => {
  const formName = 'userLogin';
  const fieldName = 'username';
  const value = 'admin';
  const action = actions.updateFieldValue(formName, fieldName, value);

  expect(action.type).toBe(actionTypes.UPDATE_FIELD_VALUE);
  expect(action.payload).toBeTruthy();
  expect(action.payload.formName).toBe(formName);
  expect(action.payload.fieldName).toBe(fieldName);
  expect(action.payload.value).toBe(value);
});

test('updateError returns the correct action', () => {
  const formName = 'userLogin';
  const fieldName = 'username';
  const error = 'something went wrong';
  const action = actions.updateError(formName, fieldName, error);

  expect(action.type).toBe(actionTypes.UPDATE_ERROR);
  expect(action.payload).toBeTruthy();
  expect(action.payload.formName).toBe(formName);
  expect(action.payload.fieldName).toBe(fieldName);
  expect(action.payload.error).toBe(error);
});
