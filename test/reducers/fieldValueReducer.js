import actionTypes from '../../src/actions';
import { getFormFieldKey, DEFAULT_FIELD_VALUE } from '../../src/helpers';
import fieldValueReducer from '../../src/reducers/fieldValueReducer';

const formName = 'login';
const existingField = 'username';
const mockState = () => ({
  [getFormFieldKey(formName, existingField)]: 'admin'
});

describe('for CREATE_FIELD', () => {
  it('initializes the default value if form field does not exist', () => {
    const newField = 'email';
    const action = {
      type: actionTypes.CREATE_FIELD,
      formName,
      fieldName: newField
    };
    const formFieldKey = getFormFieldKey(formName, newField);

    const state = mockState();
    expect(state).not.toHaveProperty(formFieldKey);

    const newState = fieldValueReducer(state, action);
    expect(newState).toHaveProperty(formFieldKey, DEFAULT_FIELD_VALUE);
  });

  it('returns current state if form field exists', () => {
    const action = {
      type: actionTypes.CREATE_FIELD,
      formName,
      fieldName: existingField
    };
    const formFieldKey = getFormFieldKey(formName, existingField);

    const state = mockState();
    expect(state).toHaveProperty(formFieldKey);

    const newState = fieldValueReducer(state, action);
    expect(newState).toEqual(state);
  });
});

describe('for UPDATE_FIELD_VALUE', () => {
  it('updates the value if form field exits', () => {
    const newValue = 'super user';
    const action = {
      type: actionTypes.UPDATE_FIELD_VALUE,
      formName,
      fieldName: existingField,
      value: newValue
    };
    const formFieldKey = getFormFieldKey(formName, existingField);

    const state = mockState();
    expect(state).toHaveProperty(formFieldKey);

    const newState = fieldValueReducer(state, action);
    expect(newState).toHaveProperty(formFieldKey, newValue);
  });

  it('returns current state if form field does not exist', () => {
    const newField = 'email';
    const newValue = 'super user';
    const action = {
      type: actionTypes.UPDATE_FIELD_VALUE,
      formName,
      fieldName: newField,
      value: newValue
    };
    const formFieldKey = getFormFieldKey(formName, newField);

    const state = mockState();
    expect(state).not.toHaveProperty(formFieldKey);

    const newState = fieldValueReducer(state, action);
    expect(newState).toEqual(state);
  });
});

it('returns current state for other actions', () => {
  const action = { type: 'Unknown' };
  const state = mockState();
  expect(fieldValueReducer(state, action)).toEqual(state);
});
