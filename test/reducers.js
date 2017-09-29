import actionTypes from '../src/actions';
import {
  formFieldsRecuder,
  fieldValueRecuder,
  errorsReducer
} from '../src/reducers';
import {
  getFormFieldKey,
  DEFAULT_FIELD_VALUE,
  DEFAULT_ERROR,
  FORM_AS_FIELD_NAME
} from '../src/helpers';

const formName = 'login';
const existingField = 'password';

describe('formFieldsRecuder', () => {
  const mockState = () => ({ [formName]: [existingField] });

  it('initializes the form fields if form does not exist for CREATE_FORM', () => {
    const action = { type: actionTypes.CREATE_FORM, payload: { formName } };
    const newState = formFieldsRecuder({}, action);
    expect(newState).toHaveProperty(formName, []);
  });

  it('returns current state if form exists for CREATE_FORM', () => {
    const action = { type: actionTypes.CREATE_FORM, payload: { formName } };

    const state = mockState();
    expect(state).toHaveProperty(formName);

    const newState = formFieldsRecuder(state, action);
    expect(newState).toEqual(state);
  });

  it('updates the form fields if form exists for CREATE_FIELD', () => {
    const fieldName = 'username';
    const action = {
      type: actionTypes.CREATE_FIELD,
      payload: { formName, fieldName }
    };

    const state = mockState();
    expect(state).toHaveProperty(formName);
    expect(state[formName]).not.toContain(fieldName);

    const newState = formFieldsRecuder(state, action);
    expect(newState).toHaveProperty(formName, [existingField, fieldName]);
  });

  it('returns current state if form does not exist for CREATE_FIELD', () => {
    const fieldName = 'username';
    const nonExistingForm = 'register';
    const action = {
      type: actionTypes.CREATE_FIELD,
      payload: { formName: nonExistingForm, fieldName }
    };

    const state = mockState();
    expect(state).not.toHaveProperty(nonExistingForm);

    const newState = formFieldsRecuder(state, action);
    expect(newState).toEqual(state);
  });

  it('does not duplicate the field if field exists for CREATE_FIELD', () => {
    const action = {
      type: actionTypes.CREATE_FIELD,
      payload: { formName, fieldName: existingField }
    };

    const state = mockState();
    expect(state[formName]).toEqual([existingField]);

    const newState = formFieldsRecuder(state, action);
    expect(newState[formName]).toEqual([existingField]);
  });

  it('returns default state for other actions', () => {
    const action = { type: 'Unkown' };
    const state = mockState();
    const newState = formFieldsRecuder(state, action);
    expect(newState).toEqual(state);
  });
});

describe('fieldValueRecuder', () => {
  const mockState = override => ({
    [getFormFieldKey(formName, existingField)]: override || DEFAULT_FIELD_VALUE
  });

  it('initializes the default value if form field does not exist for CREATE_FIELD', () => {
    const fieldName = 'username';
    const action = {
      type: actionTypes.CREATE_FIELD,
      payload: { formName, fieldName }
    };
    const fieldKeyName = getFormFieldKey(formName, fieldName);

    const state = mockState();
    expect(state).not.toHaveProperty(fieldKeyName);

    const newState = fieldValueRecuder(state, action);
    expect(newState[fieldKeyName]).toBe(DEFAULT_FIELD_VALUE);
  });

  it('sets the default value if form field exists for CREATE_FIELD', () => {
    const existingValue = 'admin';
    const action = {
      type: actionTypes.CREATE_FIELD,
      payload: { formName, fieldName: existingField }
    };
    const fieldKeyName = getFormFieldKey(formName, existingField);

    const state = mockState(existingValue);
    expect(state).toHaveProperty(fieldKeyName, existingValue);

    const newState = fieldValueRecuder(state, action);
    expect(newState).toHaveProperty(fieldKeyName, DEFAULT_FIELD_VALUE);
  });

  it('updates the value if form field exits for UPDATE_FIELD_VALUE', () => {
    const existingValue = 'admin';
    const value = 'newAdmin';
    const action = {
      type: actionTypes.UPDATE_FIELD_VALUE,
      payload: { formName, fieldName: existingField, value }
    };
    const fieldKeyName = getFormFieldKey(formName, existingField);

    const state = mockState(existingValue);
    expect(state).toHaveProperty(fieldKeyName, existingValue);

    const newState = fieldValueRecuder(state, action);
    expect(newState).toHaveProperty(fieldKeyName, value);
  });

  it('returns current state if form field does not exists for UPDATE_FIELD_VALUE', () => {
    const fieldName = 'username';
    const value = 'newAdmin';
    const action = {
      type: actionTypes.UPDATE_FIELD_VALUE,
      payload: { formName, fieldName, value }
    };

    const state = mockState();
    expect(state).not.toHaveProperty(getFormFieldKey(formName, fieldName));

    const newState = fieldValueRecuder(state, action);
    expect(newState).toEqual(state);
  });

  it('returns default state for other actions', () => {
    const action = { type: 'Unkown' };
    const state = mockState();
    const newState = fieldValueRecuder(state, action);
    expect(newState).toEqual(state);
  });
});

describe('errorsReducer', () => {
  const mockState = override => ({
    [getFormFieldKey(formName, existingField)]: DEFAULT_ERROR,
    ...override
  });

  it('initializes the defaul form error if form does not exist for CREATE_FORM', () => {
    const fieldName = FORM_AS_FIELD_NAME;
    const action = {
      type: actionTypes.CREATE_FORM,
      payload: { formName, fieldName }
    };
    const fieldKeyName = getFormFieldKey(formName, fieldName);

    const state = mockState();
    expect(state).not.toHaveProperty(fieldKeyName);

    const newState = errorsReducer(state, action);
    expect(newState[fieldKeyName]).toBe(DEFAULT_ERROR);
  });

  it('sets the default error if form exists for CREATE_FORM', () => {
    const fieldName = FORM_AS_FIELD_NAME;
    const existingError = 'Invalid';
    const action = {
      type: actionTypes.CREATE_FORM,
      payload: { formName, fieldName }
    };
    const fieldKeyName = getFormFieldKey(formName, fieldName);

    const state = mockState({ [fieldKeyName]: existingError });
    expect(state).toHaveProperty(fieldKeyName, existingError);

    const newState = errorsReducer(state, action);
    expect(newState[fieldKeyName]).toBe(DEFAULT_ERROR);
  });

  it('initializes the defaul error if form field does not exist for CREATE_FIELD', () => {
    const fieldName = 'username';
    const action = {
      type: actionTypes.CREATE_FIELD,
      payload: { formName, fieldName }
    };
    const fieldKeyName = getFormFieldKey(formName, fieldName);

    const state = mockState();
    expect(state).not.toHaveProperty(fieldKeyName);

    const newState = errorsReducer(state, action);
    expect(newState[fieldKeyName]).toBe(DEFAULT_ERROR);
  });

  it('sets the default error if form field exists for CREATE_FIELD', () => {
    const existingError = 'Invalid';
    const action = {
      type: actionTypes.CREATE_FIELD,
      payload: { formName, fieldName: existingField }
    };
    const fieldKeyName = getFormFieldKey(formName, existingField);

    const state = mockState({ [fieldKeyName]: existingError });
    expect(state).toHaveProperty(fieldKeyName, existingError);

    const newState = errorsReducer(state, action);
    expect(newState).toHaveProperty(fieldKeyName, DEFAULT_ERROR);
  });

  it('initializes the defaul error if form field does not exist for UPDATE_FIELD_VALUE', () => {
    const fieldName = 'username';
    const action = {
      type: actionTypes.UPDATE_FIELD_VALUE,
      payload: { formName, fieldName }
    };
    const fieldKeyName = getFormFieldKey(formName, fieldName);

    const state = mockState();
    expect(state).not.toHaveProperty(fieldKeyName);

    const newState = errorsReducer(state, action);
    expect(newState[fieldKeyName]).toBe(DEFAULT_ERROR);
  });

  it('sets the default error if form field exists for UPDATE_FIELD_VALUE', () => {
    const existingError = 'Invalid';
    const action = {
      type: actionTypes.UPDATE_FIELD_VALUE,
      payload: { formName, fieldName: existingField }
    };
    const fieldKeyName = getFormFieldKey(formName, existingField);

    const state = mockState({ [fieldKeyName]: existingError });
    expect(state).toHaveProperty(fieldKeyName, existingError);

    const newState = errorsReducer(state, action);
    expect(newState).toHaveProperty(fieldKeyName, DEFAULT_ERROR);
  });

  it('updates the error if form field exits for UPDATE_ERROR', () => {
    const error = 'Invalid';
    const action = {
      type: actionTypes.UPDATE_ERROR,
      payload: { formName, fieldName: existingField, error }
    };
    const fieldKeyName = getFormFieldKey(formName, existingField);

    const state = mockState();
    expect(state).toHaveProperty(fieldKeyName);

    const newState = errorsReducer(state, action);
    expect(newState).toHaveProperty(fieldKeyName, error);
  });

  it('returns current state if form field does not exists for UPDATE_FIELD_VALUE', () => {
    const fieldName = 'username';
    const action = {
      type: actionTypes.UPDATE_ERROR,
      payload: { formName, fieldName, error: 'Invalid' }
    };

    const state = mockState();
    expect(state).not.toHaveProperty(getFormFieldKey(formName, fieldName));

    const newState = errorsReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('returns default state for other actions', () => {
    const action = { type: 'Unkown' };
    const state = mockState();
    const newState = errorsReducer(state, action);
    expect(newState).toEqual(state);
  });
});
