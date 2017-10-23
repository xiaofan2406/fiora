import actionTypes from '../../src/actions';
import formFieldsReducer from '../../src/reducers/formFieldsReducer';

const formName = 'login';
const fields = ['username', 'password'];
const mockState = () => ({ [formName]: fields });

describe('for CREATE_FORM', () => {
  it('initializes the form fields if form does not exist', () => {
    const newForm = 'register';
    const action = { type: actionTypes.CREATE_FORM, formName: newForm };

    const state = mockState();
    expect(state).not.toHaveProperty(newForm);

    const newState = formFieldsReducer(state, action);
    expect(newState).toHaveProperty(newForm, []);
  });

  it('returns current state if form exists', () => {
    const action = { type: actionTypes.CREATE_FORM, formName };

    const state = mockState();
    expect(state).toHaveProperty(formName);

    const newState = formFieldsReducer(state, action);
    expect(newState).toEqual(state);
  });
});

describe('for CREATE_FIELD', () => {
  it('updates the form fields if form exists', () => {
    const newField = 'email';
    const action = {
      type: actionTypes.CREATE_FIELD,
      formName,
      fieldName: newField
    };

    const state = mockState();
    expect(state).toHaveProperty(formName);
    expect(state[formName]).not.toContain(newField);

    const newState = formFieldsReducer(state, action);
    expect(newState).toHaveProperty(formName, [...fields, newField]);
  });

  it('returns current state if form does not exist', () => {
    const newForm = 'register';
    const action = {
      type: actionTypes.CREATE_FIELD,
      formName: newForm,
      fieldName: 'email'
    };

    const state = mockState();
    expect(state).not.toHaveProperty(newForm);

    const newState = formFieldsReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('does not duplicate the field if field exists', () => {
    const newField = 'username';
    const action = {
      type: actionTypes.CREATE_FIELD,
      formName,
      fieldName: newField
    };

    const state = mockState();
    expect(state).toHaveProperty(formName);
    expect(state[formName]).toContain(newField);

    const usernameFields = formFieldsReducer(state, action)[formName].filter(
      field => field === newField
    );
    expect(usernameFields.length).toBe(1);
  });
});

it('returns current state for other actions', () => {
  const action = { type: 'Unknown' };
  const state = mockState();
  expect(formFieldsReducer(state, action)).toEqual(state);
});
