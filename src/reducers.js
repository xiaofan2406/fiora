import { combineReducers } from 'redux';

import actionTypes from './actions';
import { getFormFieldKey, DEFAULT_FIELD_VALUE, DEFAULT_ERROR } from './helpers';

const initialFormMeta = {
  // dirty: false,
  isValid: false,
  submitted: 0
};

function formMetaRecuder(state = {}, { type, payload }) {
  switch (type) {
    case actionTypes.CREATE_FORM:
      return {
        ...state,
        [payload.formName]: initialFormMeta
      };
    default:
      return state;
  }
}

function formFieldsRecuder(state = [], { type, payload }) {
  switch (type) {
    case actionTypes.CREATE_FORM:
      return {
        ...state,
        [payload.formName]: []
      };
    case actionTypes.CREATE_FIELD:
      return {
        ...state,
        [payload.formName]: [...state[payload.formName], payload.fieldName]
      };

    default:
      return state;
  }
}

function errorsReducer(state = {}, { type, payload }) {
  switch (type) {
    case actionTypes.UPDATE_ERROR:
      return {
        ...state,
        [getFormFieldKey(payload)]: payload.error
      };
    case actionTypes.UPDATE_FIELD_VALUE:
      return {
        ...state,
        [getFormFieldKey(payload)]: DEFAULT_ERROR
      };
    default:
      return state;
  }
}

function fieldValueRecuder(state = {}, { type, payload }) {
  switch (type) {
    case actionTypes.CREATE_FIELD:
      return {
        ...state,
        [getFormFieldKey(payload)]: DEFAULT_FIELD_VALUE
      };
    case actionTypes.UPDATE_FIELD_VALUE:
      return {
        ...state,
        [getFormFieldKey(payload)]: payload.value
      };
    default:
      return state;
  }
}

const initialFieldMeta = {
  touched: false
};

function fieldMetaRecuder(state = {}, { type, payload }) {
  switch (type) {
    case actionTypes.CREATE_FIELD:
      return {
        ...state,
        [getFormFieldKey(payload)]: initialFieldMeta
      };
    default:
      return state;
  }
}

export default combineReducers({
  formMeta: formMetaRecuder,
  formFields: formFieldsRecuder,
  errors: errorsReducer,
  fieldValue: fieldValueRecuder,
  fieldMeta: fieldMetaRecuder
});
