import actionTypes from '../src/actions';
import {
  initialFormState,
  formsReducer,
  initialFieldState,
  fieldsReducer
} from '../src/reducer';
import { getFormFieldKey, DEFAULT_VALUE, DEFAULT_ERROR } from '../src/helpers';

const formName = 'login';

test('initialFormState gives expected values', () => {
  expect(initialFormState()).toEqual({
    fields: [],
    error: DEFAULT_ERROR,
    isValidating: false,
    isSubmitting: false
  });
});

describe('formsReducer', () => {
  const mockState = override => ({
    [formName]: {
      ...initialFormState(),
      ...override
    }
  });

  describe('for CREATE_FORM', () => {
    it('initializes the form if form does not exist', () => {
      const action = { type: actionTypes.CREATE_FORM, formName: 'register' };
      const state = mockState();
      expect(state).not.toHaveProperty('register');

      const newState = formsReducer(state, action);
      expect(newState.register).toEqual(initialFormState());
    });

    it('returns current state if form exists', () => {
      const action = { type: actionTypes.CREATE_FORM, formName };
      const state = mockState();
      expect(state).toHaveProperty(formName);

      const newState = formsReducer(state, action);
      expect(newState).toEqual(state);
    });
  });

  describe('for CREATE_FIELD', () => {
    it('adds the new field to the form fields if form exists', () => {
      const action = {
        type: actionTypes.CREATE_FIELD,
        formName,
        fieldName: 'email'
      };
      const state = mockState();
      expect(state).toHaveProperty(formName);
      expect(state[formName]).not.toContain('email');

      const newState = formsReducer(state, action);
      expect(newState[formName].fields).toContain('email');
    });

    it('returns current state if form does not exist', () => {
      const action = {
        type: actionTypes.CREATE_FIELD,
        formName: 'register',
        fieldName: 'email'
      };
      const state = mockState();
      expect(state).not.toHaveProperty('register');

      const newState = formsReducer(state, action);
      expect(newState).toEqual(state);
    });

    it('does not duplicate fields if field exists', () => {
      const action = {
        type: actionTypes.CREATE_FIELD,
        formName,
        fieldName: 'username'
      };
      const state = mockState({ fields: ['username'] });
      expect(state).toHaveProperty(formName);
      expect(state[formName].fields).toContain('username');

      const newState = formsReducer(state, action);
      expect(
        newState[formName].fields.filter(field => field === 'username').length
      ).toBe(1);
    });
  });

  describe('for UPDATE_FORM_ERROR', () => {
    it('updates the error if form exists', () => {
      const action = {
        type: actionTypes.UPDATE_FORM_ERROR,
        formName,
        error: 'invalid'
      };
      const state = mockState();
      expect(state).toHaveProperty(formName);

      const newState = formsReducer(state, action);
      expect(newState[formName].error).toEqual('invalid');
    });

    it('returns current state if form does not exist', () => {
      const action = {
        type: actionTypes.UPDATE_FORM_ERROR,
        formName: 'register',
        error: 'invalid'
      };
      const state = mockState();
      expect(state).not.toHaveProperty('register');

      const newState = formsReducer(state, action);
      expect(newState).toEqual(state);
    });
  });

  describe('for UPDATE_FORM_IS_VALIDATING', () => {
    it('updates the error if form exists', () => {
      const action = {
        type: actionTypes.UPDATE_FORM_IS_VALIDATING,
        formName,
        isValidating: true
      };
      const state = mockState();
      expect(state).toHaveProperty(formName);

      const newState = formsReducer(state, action);
      expect(newState[formName].isValidating).toEqual(true);
    });

    it('returns current state if form does not exist', () => {
      const action = {
        type: actionTypes.UPDATE_FORM_IS_VALIDATING,
        formName: 'register',
        isValidating: true
      };
      const state = mockState();
      expect(state).not.toHaveProperty('register');

      const newState = formsReducer(state, action);
      expect(newState).toEqual(state);
    });
  });

  describe('for UPDATE_FORM_IS_SUBMITTING', () => {
    it('updates the error if form exists', () => {
      const action = {
        type: actionTypes.UPDATE_FORM_IS_SUBMITTING,
        formName,
        isSubmitting: true
      };
      const state = mockState();
      expect(state).toHaveProperty(formName);

      const newState = formsReducer(state, action);
      expect(newState[formName].isSubmitting).toEqual(true);
    });

    it('returns current state if form does not exist', () => {
      const action = {
        type: actionTypes.UPDATE_FORM_IS_SUBMITTING,
        formName: 'register',
        isSubmitting: true
      };
      const state = mockState();
      expect(state).not.toHaveProperty('register');

      const newState = formsReducer(state, action);
      expect(newState).toEqual(state);
    });
  });

  describe('for other actions', () => {
    it('returns current state for other actions', () => {
      const action = { type: 'Unknown' };
      const state = mockState();
      expect(formsReducer(state, action)).toEqual(state);
    });
  });
});

test('initialFieldState gives expected values', () => {
  expect(initialFieldState()).toEqual({
    value: DEFAULT_VALUE,
    error: DEFAULT_ERROR,
    isTouched: false,
    isValidating: false
  });

  expect(initialFieldState('somevalue')).toEqual({
    value: 'somevalue',
    error: DEFAULT_ERROR,
    isTouched: false,
    isValidating: false
  });
});

describe('fieldsReducer', () => {
  const mockState = override => ({
    [getFormFieldKey(formName, 'username')]: {
      ...initialFieldState(),
      ...override
    }
  });

  describe('for CREATE_FIELD', () => {
    describe('if field does not exist', () => {
      const fieldKey = getFormFieldKey(formName, 'password');
      let state;
      beforeEach(() => {
        state = mockState();
        expect(state).not.toHaveProperty(fieldKey);
      });

      it('initializes the field with default value if initialValue is falsy', () => {
        const action = {
          type: actionTypes.CREATE_FIELD,
          formName,
          fieldName: 'password'
        };
        const newState = fieldsReducer(state, action);
        expect(newState[fieldKey]).toEqual(initialFieldState());
      });

      it('initializes the field with given initialValue if truthy', () => {
        const action = {
          type: actionTypes.CREATE_FIELD,
          formName,
          fieldName: 'password',
          initialValue: 'securepass'
        };
        const newState = fieldsReducer(state, action);
        expect(newState[fieldKey]).toEqual(initialFieldState('securepass'));
      });
    });

    it('returns current state if field exists', () => {
      const action = {
        type: actionTypes.CREATE_FIELD,
        formName,
        fieldName: 'username'
      };
      const fieldKey = getFormFieldKey(formName, 'username');
      const state = mockState();
      expect(state).toHaveProperty(fieldKey);

      const newState = fieldsReducer(state, action);
      expect(newState).toEqual(state);
    });
  });

  describe('for UPDATE_FIELD_VALUE', () => {
    describe('if field exists', () => {
      const action = {
        type: actionTypes.UPDATE_FIELD_VALUE,
        formName,
        fieldName: 'username',
        value: 'admin'
      };
      const fieldKey = getFormFieldKey(formName, 'username');
      const state = mockState();
      expect(state).toHaveProperty(fieldKey);
      const newState = fieldsReducer(state, action);

      it('updates the value', () => {
        expect(newState[fieldKey].value).toEqual('admin');
      });

      it('sets the isTouched status to true', () => {
        expect(newState[fieldKey].isTouched).toBe(true);
      });

      it('resets the error to default', () => {
        expect(newState[fieldKey].error).toEqual(DEFAULT_ERROR);
      });
    });

    it('returns current state if field does not exist', () => {
      const action = {
        type: actionTypes.UPDATE_FIELD_VALUE,
        formName,
        fieldName: 'email',
        value: 'admin'
      };
      const fieldKey = getFormFieldKey(formName, 'email');
      const state = mockState();
      expect(state).not.toHaveProperty(fieldKey);

      const newState = fieldsReducer(state, action);
      expect(newState).toEqual(state);
    });
  });

  describe('for UPDATE_FIELD_ERROR', () => {
    it('updates the error if field exists', () => {
      const action = {
        type: actionTypes.UPDATE_FIELD_ERROR,
        formName,
        fieldName: 'username',
        error: 'invalid'
      };
      const fieldKey = getFormFieldKey(formName, 'username');
      const state = mockState();
      expect(state).toHaveProperty(fieldKey);

      const newState = fieldsReducer(state, action);
      expect(newState[fieldKey].error).toEqual('invalid');
    });

    it('returns current state if field does not exist', () => {
      const action = {
        type: actionTypes.UPDATE_FIELD_ERROR,
        formName,
        fieldName: 'email',
        error: 'invalid'
      };
      const fieldKey = getFormFieldKey(formName, 'email');
      const state = mockState();
      expect(state).not.toHaveProperty(fieldKey);

      const newState = fieldsReducer(state, action);
      expect(newState).toEqual(state);
    });
  });

  describe('for UPDATE_FIELD_IS_VALIDATING', () => {
    it('updates the error if field exists', () => {
      const action = {
        type: actionTypes.UPDATE_FIELD_IS_VALIDATING,
        formName,
        fieldName: 'username',
        isValidating: true
      };
      const fieldKey = getFormFieldKey(formName, 'username');
      const state = mockState();
      expect(state).toHaveProperty(fieldKey);

      const newState = fieldsReducer(state, action);
      expect(newState[fieldKey].isValidating).toEqual(true);
    });

    it('returns current state if field does not exist', () => {
      const action = {
        type: actionTypes.UPDATE_FIELD_IS_VALIDATING,
        formName,
        fieldName: 'email',
        isValidating: true
      };
      const fieldKey = getFormFieldKey(formName, 'email');
      const state = mockState();
      expect(state).not.toHaveProperty(fieldKey);

      const newState = fieldsReducer(state, action);
      expect(newState).toEqual(state);
    });
  });

  describe('for other actions', () => {
    it('returns current state for other actions', () => {
      const action = { type: 'Unknown' };
      const state = mockState();
      expect(fieldsReducer(state, action)).toEqual(state);
    });
  });
});
