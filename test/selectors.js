import * as selectors from '../src/selectors';
import { getFormFieldKey, DEFAULT_ERROR, DEFAULT_VALUE } from '../src/helpers';

const formName = 'login';
let state;

beforeEach(() => {
  state = {
    fiora: {
      forms: {
        [formName]: {
          fields: ['username', 'password'],
          error: DEFAULT_ERROR,
          isValidating: false,
          isSubmitting: true
        }
      },
      fields: {
        [getFormFieldKey(formName, 'username')]: {
          value: 'admin',
          error: 'invalid',
          isTouched: true,
          isValidating: false
        },
        [getFormFieldKey(formName, 'password')]: {
          value: DEFAULT_VALUE,
          error: DEFAULT_ERROR,
          isTouched: false,
          isValidating: true
        }
      }
    }
  };
});

test('getFormFields returns the fields for the form', () => {
  expect(selectors.getFormFields(state, { formName })).toEqual([
    'username',
    'password'
  ]);
});

test('getFormError returns the error for the form', () => {
  expect(selectors.getFormError(state, { formName })).toEqual(DEFAULT_ERROR);
});

test('getIsFormValidating returns the isValidating status for the form', () => {
  expect(selectors.getIsFormValidating(state, { formName })).toBe(false);
});

test('getIsFormSubmitting returns the isSubmitting status for the form', () => {
  expect(selectors.getIsFormSubmitting(state, { formName })).toBe(true);
});

test('getFieldValue returns the value for the field', () => {
  expect(
    selectors.getFieldValue(state, { formName, fieldName: 'username' })
  ).toEqual('admin');
  expect(
    selectors.getFieldValue(state, { formName, fieldName: 'password' })
  ).toEqual(DEFAULT_VALUE);
});

test('getFieldError returns the error for the field', () => {
  expect(
    selectors.getFieldError(state, { formName, fieldName: 'username' })
  ).toEqual('invalid');
  expect(
    selectors.getFieldError(state, { formName, fieldName: 'password' })
  ).toEqual(DEFAULT_ERROR);
});

test('getIsFieldTouched returns the isTouched status for the field', () => {
  expect(
    selectors.getIsFieldTouched(state, { formName, fieldName: 'username' })
  ).toBe(true);
  expect(
    selectors.getIsFieldTouched(state, { formName, fieldName: 'password' })
  ).toBe(false);
});

test('getIsFieldValidating returns the isValidating status for the field', () => {
  expect(
    selectors.getIsFieldValidating(state, { formName, fieldName: 'username' })
  ).toBe(false);
  expect(
    selectors.getIsFieldValidating(state, { formName, fieldName: 'password' })
  ).toBe(true);
});

test('getFormValues returns an object of all fields value', () => {
  expect(selectors.getFormValues(state, { formName })).toEqual({
    username: 'admin',
    password: DEFAULT_VALUE
  });
});

test('getIsFormTouched returns isTouched status for the form', () => {
  expect(selectors.getIsFormTouched(state, { formName })).toBe(true);

  state.fiora.fields[getFormFieldKey(formName, 'username')].isTouched = false;
  expect(selectors.getIsFormTouched(state, { formName })).toBe(false);

  state.fiora.fields[getFormFieldKey(formName, 'username')].isTouched = true;
  state.fiora.fields[getFormFieldKey(formName, 'password')].isTouched = true;
  expect(selectors.getIsFormTouched(state, { formName })).toBe(true);
});

test('getFormHasError returns a boolean flag indicating if form contains any error', () => {
  expect(selectors.getFormHasError(state, { formName })).toBe(true);

  state.fiora.fields[getFormFieldKey(formName, 'username')].error = null;
  expect(selectors.getFormHasError(state, { formName })).toBe(false);

  state.fiora.forms[formName].error = 'invalid';
  expect(selectors.getFormHasError(state, { formName })).toBe(true);
});
