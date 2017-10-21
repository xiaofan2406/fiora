import actionTypes from '../src/actions';
import {
  formFieldsRecuder,
  fieldValueRecuder,
  initialFieldMeta,
  fieldMetaRecuder,
  errorsReducer
} from '../src/reducers';
import {
  getFormFieldKey,
  DEFAULT_FIELD_VALUE,
  DEFAULT_ERROR
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

describe('fieldMetaRecuder', () => {
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

      const newState = fieldMetaRecuder(state, action);
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

      const newState = fieldMetaRecuder(state, action);
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

      const newState = fieldMetaRecuder(state, action);
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

      const newState = fieldMetaRecuder(state, action);
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

      const newState = fieldMetaRecuder(state, action);
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

      const newState = fieldMetaRecuder(state, action);
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

      const newState = fieldMetaRecuder(state, action);
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

      const newState = fieldMetaRecuder(state, action);
      expect(newState).toEqual(state);
    });
  });

  it('returns current state for other actions', () => {
    const action = { type: 'Unknown' };
    const state = mockState();
    expect(fieldMetaRecuder(state, action)).toEqual(state);
  });
});

describe('errorsReducer', () => {
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
});
