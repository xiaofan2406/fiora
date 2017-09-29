import * as selectors from '../src/selectors';
import { getFormFieldKey } from '../src/helpers';

const mockState = override => ({
  fiora: {
    fieldValue: {},
    errors: {},
    formFields: {},
    ...override
  }
});

const formName = 'login';

test('getFieldValue returns the value for the field', () => {
  const fieldName = 'username';
  const value = 'admin';
  const state = mockState({
    fieldValue: { [getFormFieldKey(formName, fieldName)]: value }
  });

  const result = selectors.getFieldValue(state, { formName, fieldName });
  expect(result).toBe(value);
});

test('getError returns the error for the field', () => {
  const fieldName = 'username';
  const error = '404 error';
  const state = mockState({
    errors: { [getFormFieldKey(formName, fieldName)]: error }
  });

  const result = selectors.getError(state, { formName, fieldName });
  expect(result).toBe(error);
});

test('getFormFields returns the error for the field', () => {
  const fields = ['username', 'password'];
  const state = mockState({ formFields: { [formName]: fields } });

  const result = selectors.getFormFields(state, { formName });
  expect(result).toEqual(fields);
});

test('getFormValues returns the error for the field', () => {
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
  expect(result).toHaveProperty('username', username);
  expect(result).toHaveProperty('password', password);
});
