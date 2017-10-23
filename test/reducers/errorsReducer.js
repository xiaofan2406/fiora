import actionTypes from '../../src/actions';
import { getFormFieldKey, DEFAULT_ERROR } from '../../src/helpers';
import errorsReducer from '../../src/reducers/errorsReducer';

const formName = 'login';
const existingField = 'username';
const existingError = 'Invalid';
const mockState = () => ({
  [getFormFieldKey(formName, existingField)]: existingError
});

describe('for UPDATE_FIELD_VALUE', () => {
  it('resets the defaul error if form field exists ', () => {
    const action = {
      type: actionTypes.UPDATE_FIELD_VALUE,
      formName,
      fieldName: existingField,
      value: 'super user'
    };
    const formFieldKey = getFormFieldKey(formName, existingField);

    const state = mockState();
    expect(state).toHaveProperty(formFieldKey, existingError);

    const newState = errorsReducer(state, action);
    expect(newState).toHaveProperty(formFieldKey, DEFAULT_ERROR);
  });

  it('returns current state if field error does not exist', () => {
    const newField = 'email';
    const action = {
      type: actionTypes.UPDATE_FIELD_VALUE,
      formName,
      fieldName: newField,
      value: 'super user'
    };
    const formFieldKey = getFormFieldKey(formName, newField);

    const state = mockState();
    expect(state).not.toHaveProperty(formFieldKey);

    const newState = errorsReducer(state, action);
    expect(newState).toEqual(state);
  });
});

describe('for UPDATE_ERROR', () => {
  it('updates the error if form field exits', () => {
    const newError = 'Invalid username';
    const action = {
      type: actionTypes.UPDATE_ERROR,
      formName,
      fieldName: existingField,
      error: newError
    };
    const formFieldKey = getFormFieldKey(formName, existingField);

    const state = mockState();
    expect(state).toHaveProperty(formFieldKey);
    expect(state[formFieldKey]).not.toEqual(newError);

    const newState = errorsReducer(state, action);
    expect(newState).toHaveProperty(formFieldKey, newError);
  });

  it('updates the error if form field does not exist', () => {
    const newError = 'Invalid username';
    const newField = 'email';
    const action = {
      type: actionTypes.UPDATE_ERROR,
      formName,
      fieldName: newField,
      error: newError
    };
    const formFieldKey = getFormFieldKey(formName, newField);

    const state = mockState();
    expect(state).not.toHaveProperty(formFieldKey);
    expect(state[formFieldKey]).not.toEqual(newError);

    const newState = errorsReducer(state, action);
    expect(newState).toHaveProperty(formFieldKey, newError);
  });
});

it('returns current state for other actions', () => {
  const action = { type: 'Unknown' };
  const state = mockState();
  expect(errorsReducer(state, action)).toEqual(state);
});
