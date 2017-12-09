import { combineReducers } from 'redux';
import actionTypes from './actions';
import {
  getFormFieldKey,
  DEFAULT_VALUE,
  DEFAULT_ERROR,
  makeFormMetaReducer,
  makeFieldMetaReducer,
} from './helpers';

export const initialFormState = () => ({
  fields: [],
  error: DEFAULT_ERROR,
  isValidating: false,
  isSubmitting: false,
});

export function formsReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.CREATE_FORM:
      return Object.keys(state).includes(action.formName)
        ? state
        : {
            ...state,
            [action.formName]: initialFormState(),
          };
    case actionTypes.CREATE_FIELD:
      return Object.keys(state).includes(action.formName)
        ? {
            ...state,
            [action.formName]: {
              ...state[action.formName],
              fields: [
                ...new Set([
                  ...state[action.formName].fields,
                  action.fieldName,
                ]),
              ],
            },
          }
        : state;
    case actionTypes.UPDATE_FORM_ERROR:
      return makeFormMetaReducer('error')(state, action);
    case actionTypes.UPDATE_FORM_IS_VALIDATING:
      return makeFormMetaReducer('isValidating')(state, action);
    case actionTypes.UPDATE_FORM_IS_SUBMITTING:
      return makeFormMetaReducer('isSubmitting')(state, action);
    default:
      return state;
  }
}

export const initialFieldState = initialValue => ({
  value: initialValue || DEFAULT_VALUE,
  error: DEFAULT_ERROR,
  isTouched: false,
  isValidating: false,
});

export function fieldsReducer(state = {}, action) {
  const fieldKeyName = getFormFieldKey(action.formName, action.fieldName);
  switch (action.type) {
    case actionTypes.CREATE_FIELD:
      return Object.keys(state).includes(fieldKeyName)
        ? state
        : {
            ...state,
            [fieldKeyName]: initialFieldState(action.initialValue),
          };
    case actionTypes.UPDATE_FIELD_VALUE:
      return makeFieldMetaReducer('value', {
        isTouched: true,
        error: DEFAULT_ERROR,
      })(state, action);
    case actionTypes.UPDATE_FIELD_ERROR:
      return makeFieldMetaReducer('error')(state, action);
    case actionTypes.UPDATE_FIELD_IS_VALIDATING:
      return makeFieldMetaReducer('isValidating')(state, action);
    default:
      return state;
  }
}

export default combineReducers({
  forms: formsReducer,
  fields: fieldsReducer,
});
