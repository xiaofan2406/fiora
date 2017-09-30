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
const fieldName = 'password';

describe('formFieldsRecuder', () => {
  const mockState = () => ({ [formName]: [fieldName] });

  it('initializes the form fields if form does not exist for CREATE_FORM', () => {
    const newForm = 'register';
    const action = { type: actionTypes.CREATE_FORM, formName: newForm };

    const state = mockState();
    expect(state).not.toHaveProperty(newForm);

    const newState = formFieldsRecuder(state, action);
    expect(newState).toHaveProperty(newForm, []);
  });

  it('returns current state if form exists for CREATE_FORM', () => {
    const action = { type: actionTypes.CREATE_FORM, formName };

    const state = mockState();
    expect(state).toHaveProperty(formName);

    const newState = formFieldsRecuder(state, action);
    expect(newState).toEqual(state);
  });

  it('updates the form fields if form exists for CREATE_FIELD', () => {
    const newField = 'username';
    const action = {
      type: actionTypes.CREATE_FIELD,
      formName,
      fieldName: newField
    };

    const state = mockState();
    expect(state).toHaveProperty(formName);
    expect(state[formName]).not.toContain(newField);

    const newState = formFieldsRecuder(state, action);
    expect(newState).toHaveProperty(formName, [fieldName, newField]);
  });

  it('returns current state if form does not exist for CREATE_FIELD', () => {
    const newField = 'username';
    const newForm = 'register';
    const action = {
      type: actionTypes.CREATE_FIELD,
      formName: newForm,
      fieldName: newField
    };

    const state = mockState();
    expect(state).not.toHaveProperty(newForm);

    const newState = formFieldsRecuder(state, action);
    expect(newState).toEqual(state);
  });

  it('does not duplicate the field if field exists for CREATE_FIELD', () => {
    const action = { type: actionTypes.CREATE_FIELD, formName, fieldName };

    const state = mockState();
    expect(state).toHaveProperty(formName, [fieldName]);

    const newState = formFieldsRecuder(state, action);
    expect(newState).toHaveProperty(formName, [fieldName]);
  });

  it('returns current state for other actions', () => {
    const action = { type: 'Unknown' };
    const state = mockState();
    const newState = formFieldsRecuder(state, action);
    expect(newState).toEqual(state);
  });
});

describe('fieldValueRecuder', () => {
  const mockState = override => ({
    [getFormFieldKey(formName, fieldName)]: override || DEFAULT_FIELD_VALUE
  });

  it('initializes the default value if form field does not exist for CREATE_FIELD', () => {
    const newField = 'username';
    const action = {
      type: actionTypes.CREATE_FIELD,
      formName,
      fieldName: newField
    };
    const fieldKeyName = getFormFieldKey(formName, newField);

    const state = mockState();
    expect(state).not.toHaveProperty(fieldKeyName);

    const newState = fieldValueRecuder(state, action);
    expect(newState).toHaveProperty(fieldKeyName, DEFAULT_FIELD_VALUE);
  });

  it('returns current state if form field exists for CREATE_FIELD', () => {
    const existingValue = 'admin';
    const action = { type: actionTypes.CREATE_FIELD, formName, fieldName };
    const fieldKeyName = getFormFieldKey(formName, fieldName);

    const state = mockState(existingValue);
    expect(state).toHaveProperty(fieldKeyName, existingValue);

    const newState = fieldValueRecuder(state, action);
    expect(newState).toEqual(state);
  });

  it('updates the value if form field exits for UPDATE_FIELD_VALUE', () => {
    const existingValue = 'admin';
    const newValue = 'super user';
    const action = {
      type: actionTypes.UPDATE_FIELD_VALUE,
      formName,
      fieldName,
      value: newValue
    };
    const fieldKeyName = getFormFieldKey(formName, fieldName);

    const state = mockState(existingValue);
    expect(state).toHaveProperty(fieldKeyName, existingValue);

    const newState = fieldValueRecuder(state, action);
    expect(newState).toHaveProperty(fieldKeyName, newValue);
  });

  it('returns current state if form field does not exist for UPDATE_FIELD_VALUE', () => {
    const newField = 'username';
    const newValue = 'super user';
    const action = {
      type: actionTypes.UPDATE_FIELD_VALUE,
      formName,
      fieldName: newField,
      value: newValue
    };

    const fieldKeyName = getFormFieldKey(formName, newField);

    const state = mockState();
    expect(state).not.toHaveProperty(fieldKeyName);

    const newState = fieldValueRecuder(state, action);
    expect(newState).toEqual(state);
  });

  it('returns current state for other actions', () => {
    const action = { type: 'Unknown' };
    const state = mockState();
    const newState = fieldValueRecuder(state, action);
    expect(newState).toEqual(state);
  });
});

describe('errorsReducer', () => {
  const mockState = override => ({
    [getFormFieldKey(formName, fieldName)]: DEFAULT_ERROR,
    ...override
  });

  it('initializes the defaul form error if form does not exist for CREATE_FORM', () => {
    const action = { type: actionTypes.CREATE_FORM, formName };

    const fieldKeyName = getFormFieldKey(formName, FORM_AS_FIELD_NAME);

    const state = mockState();
    expect(state).not.toHaveProperty(fieldKeyName);

    const newState = errorsReducer(state, action);
    expect(newState).toHaveProperty(fieldKeyName, DEFAULT_ERROR);
  });

  it('initializes the defaul field error if form field does not exist for CREATE_FIELD', () => {
    const newField = 'username';
    const action = {
      type: actionTypes.CREATE_FIELD,
      formName,
      fieldName: newField
    };

    const fieldKeyName = getFormFieldKey(formName, newField);

    const state = mockState();
    expect(state).not.toHaveProperty(fieldKeyName);

    const newState = errorsReducer(state, action);
    expect(newState).toHaveProperty(fieldKeyName, DEFAULT_ERROR);
  });

  it('returns current state if form error exists for CREATE_FORM', () => {
    const existingError = 'Invalid';
    const action = { type: actionTypes.CREATE_FORM, formName };

    const fieldKeyName = getFormFieldKey(formName, FORM_AS_FIELD_NAME);

    const state = mockState({ [fieldKeyName]: existingError });
    expect(state).toHaveProperty(fieldKeyName, existingError);

    const newState = errorsReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('returns current state if field error exists for CREATE_FIELD', () => {
    const existingError = 'Invalid';
    const action = { type: actionTypes.CREATE_FIELD, formName, fieldName };

    const fieldKeyName = getFormFieldKey(formName, fieldName);

    const state = mockState({ [fieldKeyName]: existingError });
    expect(state).toHaveProperty(fieldKeyName, existingError);

    const newState = errorsReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('resets the defaul error if form field exists for UPDATE_FIELD_VALUE', () => {
    const existingError = 'Invalid';
    const action = {
      type: actionTypes.UPDATE_FIELD_VALUE,
      formName,
      fieldName,
      value: 'super user'
    };

    const fieldKeyName = getFormFieldKey(formName, fieldName);

    const state = mockState({ [fieldKeyName]: existingError });
    expect(state).toHaveProperty(fieldKeyName, existingError);

    const newState = errorsReducer(state, action);
    expect(newState).toHaveProperty(fieldKeyName, DEFAULT_ERROR);
  });

  it('returns current state if field error does not exist for UPDATE_FIELD_VALUE', () => {
    const newField = 'username';
    const action = {
      type: actionTypes.UPDATE_FIELD_VALUE,
      formName,
      fieldName: newField,
      value: 'super user'
    };

    const fieldKeyName = getFormFieldKey(formName, newField);

    const state = mockState();
    expect(state).not.toHaveProperty(fieldKeyName);

    const newState = errorsReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('updates the error if form field exits for UPDATE_ERROR', () => {
    const newError = 'Invalid';
    const action = {
      type: actionTypes.UPDATE_ERROR,
      formName,
      fieldName,
      error: newError
    };

    const fieldKeyName = getFormFieldKey(formName, fieldName);

    const state = mockState();
    expect(state).toHaveProperty(fieldKeyName);

    const newState = errorsReducer(state, action);
    expect(newState).toHaveProperty(fieldKeyName, newError);
  });

  it('returns current state if form field does not exist for UPDATE_ERROR', () => {
    const newField = 'username';
    const action = {
      type: actionTypes.UPDATE_ERROR,
      formName,
      fieldName: newField,
      error: 'Invalid'
    };

    const fieldKeyName = getFormFieldKey(formName, newField);

    const state = mockState();
    expect(state).not.toHaveProperty(fieldKeyName);

    const newState = errorsReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('returns current state for other actions', () => {
    const action = { type: 'Unknown' };
    const state = mockState();
    const newState = errorsReducer(state, action);
    expect(newState).toEqual(state);
  });
});
