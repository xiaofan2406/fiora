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

describe('formFieldsRecuder', () => {
  const fields = ['username', 'password'];
  const mockState = () => ({ [formName]: fields });

  describe('for CREATE_FORM', () => {
    it('initializes the form fields if form does not exist', () => {
      const newForm = 'register';
      const action = { type: actionTypes.CREATE_FORM, formName: newForm };

      const state = mockState();
      expect(state).not.toHaveProperty(newForm);

      const newState = formFieldsRecuder(state, action);
      expect(newState).toHaveProperty(newForm, []);
    });

    it('returns current state if form exists', () => {
      const action = { type: actionTypes.CREATE_FORM, formName };

      const state = mockState();
      expect(state).toHaveProperty(formName);

      const newState = formFieldsRecuder(state, action);
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

      const newState = formFieldsRecuder(state, action);
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

      const newState = formFieldsRecuder(state, action);
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

      const usernameFields = formFieldsRecuder(state, action)[formName].filter(
        field => field === newField
      );
      expect(usernameFields.length).toBe(1);
    });
  });

  it('returns current state for other actions', () => {
    const action = { type: 'Unknown' };
    const state = mockState();
    expect(formFieldsRecuder(state, action)).toEqual(state);
  });
});

describe('fieldValueRecuder', () => {
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

      const newState = fieldValueRecuder(state, action);
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

      const newState = fieldValueRecuder(state, action);
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

      const newState = fieldValueRecuder(state, action);
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

      const newState = fieldValueRecuder(state, action);
      expect(newState).toEqual(state);
    });
  });

  it('returns current state for other actions', () => {
    const action = { type: 'Unknown' };
    const state = mockState();
    expect(fieldValueRecuder(state, action)).toEqual(state);
  });
});

// TODO remove default error
describe('errorsReducer', () => {
  const existingField = 'username';
  const mockState = override => ({
    [getFormFieldKey(formName, existingField)]: DEFAULT_ERROR,
    ...override
  });

  describe('for CREATE_FORM', () => {
    it('initializes the defaul form error if form does not exist ', () => {
      const action = { type: actionTypes.CREATE_FORM, formName };
      const formFieldKey = getFormFieldKey(formName, FORM_AS_FIELD_NAME);

      const state = mockState();
      expect(state).not.toHaveProperty(formFieldKey);

      const newState = errorsReducer(state, action);
      expect(newState).toHaveProperty(formFieldKey, DEFAULT_ERROR);
    });

    it('returns current state if form error exists', () => {
      const existingError = 'Invalid';
      const action = { type: actionTypes.CREATE_FORM, formName };

      const formFieldKey = getFormFieldKey(formName, FORM_AS_FIELD_NAME);

      const state = mockState({ [formFieldKey]: existingError });
      expect(state).toHaveProperty(formFieldKey, existingError);

      const newState = errorsReducer(state, action);
      expect(newState).toEqual(state);
    });
  });

  describe('for CREATE_FIELD', () => {
    it('initializes the defaul field error if form field does not exist', () => {
      const newField = 'email';
      const action = {
        type: actionTypes.CREATE_FIELD,
        formName,
        fieldName: newField
      };

      const formFieldKey = getFormFieldKey(formName, newField);

      const state = mockState();
      expect(state).not.toHaveProperty(formFieldKey);

      const newState = errorsReducer(state, action);
      expect(newState).toHaveProperty(formFieldKey, DEFAULT_ERROR);
    });

    it('returns current state if field error exists', () => {
      const existingError = 'Invalid';
      const action = {
        type: actionTypes.CREATE_FIELD,
        formName,
        fieldName: existingField
      };

      const formFieldKey = getFormFieldKey(formName, existingField);

      const state = mockState({ [formFieldKey]: existingError });
      expect(state).toHaveProperty(formFieldKey, existingError);

      const newState = errorsReducer(state, action);
      expect(newState).toEqual(state);
    });
  });

  it('resets the defaul error if form field exists for UPDATE_FIELD_VALUE', () => {
    const existingError = 'Invalid';
    const action = {
      type: actionTypes.UPDATE_FIELD_VALUE,
      formName,
      fieldName: existingField,
      value: 'super user'
    };

    const formFieldKey = getFormFieldKey(formName, existingField);

    const state = mockState({ [formFieldKey]: existingError });
    expect(state).toHaveProperty(formFieldKey, existingError);

    const newState = errorsReducer(state, action);
    expect(newState).toHaveProperty(formFieldKey, DEFAULT_ERROR);
  });

  it('returns current state if field error does not exist for UPDATE_FIELD_VALUE', () => {
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

  it('updates the error if form field exits for UPDATE_ERROR', () => {
    const newError = 'Invalid';
    const action = {
      type: actionTypes.UPDATE_ERROR,
      formName,
      fieldName: existingField,
      error: newError
    };

    const formFieldKey = getFormFieldKey(formName, existingField);

    const state = mockState();
    expect(state).toHaveProperty(formFieldKey);

    const newState = errorsReducer(state, action);
    expect(newState).toHaveProperty(formFieldKey, newError);
  });

  it('returns current state if form field does not exist for UPDATE_ERROR', () => {
    const newField = 'email';
    const action = {
      type: actionTypes.UPDATE_ERROR,
      formName,
      fieldName: newField,
      error: 'Invalid'
    };

    const formFieldKey = getFormFieldKey(formName, newField);

    const state = mockState();
    expect(state).not.toHaveProperty(formFieldKey);

    const newState = errorsReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('returns current state for other actions', () => {
    const action = { type: 'Unknown' };
    const state = mockState();
    expect(errorsReducer(state, action)).toEqual(state);
  });
});
