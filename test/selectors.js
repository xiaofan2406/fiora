import * as selectors from '../src/selectors';
import { getFormFieldKey } from '../src/helpers';

const formName = 'login';

const mockState = override => ({
  fiora: {
    fieldValue: {},
    errors: {},
    formFields: {},
    ...override
  }
});

test('getFieldValue returns the value for the field', () => {
  const fieldName = 'username';
  const value = 'admin';
  const state = mockState({
    fieldValue: { [getFormFieldKey(formName, fieldName)]: value }
  });
  expect(selectors.getFieldValue(state, { formName, fieldName })).toBe(value);
});

test('getError returns the error for the field', () => {
  const fieldName = 'username';
  const error = '404 error';
  const state = mockState({
    errors: { [getFormFieldKey(formName, fieldName)]: error }
  });
  expect(selectors.getError(state, { formName, fieldName })).toBe(error);
});

test('getFormFields returns the fields for the form', () => {
  const fields = ['username', 'password'];
  const state = mockState({ formFields: { [formName]: fields } });
  expect(selectors.getFormFields(state, { formName })).toEqual(fields);
});

test('getFormValues returns the field values for the form', () => {
  const fields = ['username', 'password'];
  const username = 'admin';
  const password = 'securepassword';
  const state = mockState({
    formFields: { [formName]: fields },
    fieldValue: {
      [getFormFieldKey(formName, 'username')]: username,
      [getFormFieldKey(formName, 'password')]: password
    }
  });
  const result = selectors.getFormValues(state, { formName });
  expect(result).toEqual({ username, password });
});
