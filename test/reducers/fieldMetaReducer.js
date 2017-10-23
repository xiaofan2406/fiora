import actionTypes from '../../src/actions';
import { getFormFieldKey } from '../../src/helpers';
import fieldMetaReducer, {
  initialFieldMeta
} from '../../src/reducers/fieldMetaReducer';

const formName = 'login';
const existingField = 'username';
const mockState = () => ({
  [getFormFieldKey(formName, existingField)]: initialFieldMeta()
});

describe('for CREATE_FIELD', () => {
  it('initializes the default meta if form field does not exist', () => {
    const newField = 'email';
    const action = {
      type: actionTypes.CREATE_FIELD,
      formName,
      fieldName: newField
    };
    const formFieldKey = getFormFieldKey(formName, newField);

    const state = mockState();
    expect(state).not.toHaveProperty(formFieldKey);

    const newState = fieldMetaReducer(state, action);
    expect(newState).toHaveProperty(formFieldKey, initialFieldMeta());
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

    const newState = fieldMetaReducer(state, action);
    expect(newState).toEqual(state);
  });
});

describe('for UPDATE_FIELD_VALUE', () => {
  it('sets isTouched meta to true if form field exists', () => {
    const action = {
      type: actionTypes.UPDATE_FIELD_VALUE,
      formName,
      fieldName: existingField
    };
    const formFieldKey = getFormFieldKey(formName, existingField);

    const state = mockState();
    expect(state).toHaveProperty(formFieldKey);

    const newState = fieldMetaReducer(state, action);
    expect(newState[formFieldKey]).toHaveProperty('isTouched', true);
  });

  it('returns current state if form field does not exist', () => {
    const newField = 'email';
    const action = {
      type: actionTypes.UPDATE_FIELD_VALUE,
      formName,
      fieldName: newField
    };
    const formFieldKey = getFormFieldKey(formName, newField);

    const state = mockState();
    expect(state).not.toHaveProperty(formFieldKey);

    const newState = fieldMetaReducer(state, action);
    expect(newState).toEqual(state);
  });
});

describe('for START_VALIDATING_FIELD', () => {
  it('sets isValidating meta to true if form field exists', () => {
    const action = {
      type: actionTypes.START_VALIDATING_FIELD,
      formName,
      fieldName: existingField
    };
    const formFieldKey = getFormFieldKey(formName, existingField);

    const state = mockState();
    expect(state).toHaveProperty(formFieldKey);

    const newState = fieldMetaReducer(state, action);
    expect(newState[formFieldKey]).toHaveProperty('isValidating', true);
  });

  it('returns current state if form field does not exist', () => {
    const newField = 'email';
    const action = {
      type: actionTypes.START_VALIDATING_FIELD,
      formName,
      fieldName: newField
    };
    const formFieldKey = getFormFieldKey(formName, newField);

    const state = mockState();
    expect(state).not.toHaveProperty(formFieldKey);

    const newState = fieldMetaReducer(state, action);
    expect(newState).toEqual(state);
  });
});

describe('for FINISH_VALIDATING_FIELD', () => {
  it('sets isValidating meta to false if form field exists', () => {
    const action = {
      type: actionTypes.FINISH_VALIDATING_FIELD,
      formName,
      fieldName: existingField
    };
    const formFieldKey = getFormFieldKey(formName, existingField);

    const state = mockState();
    expect(state).toHaveProperty(formFieldKey);

    const newState = fieldMetaReducer(state, action);
    expect(newState[formFieldKey]).toHaveProperty('isValidating', false);
  });

  it('returns current state if form field does not exist', () => {
    const newField = 'email';
    const action = {
      type: actionTypes.FINISH_VALIDATING_FIELD,
      formName,
      fieldName: newField
    };
    const formFieldKey = getFormFieldKey(formName, newField);

    const state = mockState();
    expect(state).not.toHaveProperty(formFieldKey);

    const newState = fieldMetaReducer(state, action);
    expect(newState).toEqual(state);
  });
});

it('returns current state for other actions', () => {
  const action = { type: 'Unknown' };
  const state = mockState();
  expect(fieldMetaReducer(state, action)).toEqual(state);
});
