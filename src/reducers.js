import { combineReducers } from 'redux';

import actionTypes from './actions';
import {
  getFormFieldKey,
  DEFAULT_FIELD_VALUE,
  DEFAULT_ERROR,
  FORM_AS_FIELD_NAME
} from './helpers';

// const initialFormMeta = {
//   // dirty: false,
//   isValid: false,
//   submitted: 0
// };

// function formMetaRecuder(state = {}, { type, payload }) {
//   switch (type) {
//     case actionTypes.CREATE_FORM:
//       return {
//         ...state,
//         [payload.formName]: initialFormMeta
//       };
//     default:
//       return state;
//   }
// }

// const initialFieldMeta = {
//   touched: false
// };

// function fieldMetaRecuder(state = {}, { type, payload }) {
//   switch (type) {
//     case actionTypes.CREATE_FIELD:
//       return {
//         ...state,
//         [getFormFieldKey(payload.formName, payload.fieldName)]: initialFieldMeta
//       };
//     default:
//       return state;
//   }
// }

function formFieldsRecuder(state = {}, { type, payload }) {
  switch (type) {
    case actionTypes.CREATE_FORM:
      return Object.keys(state).includes(payload.formName)
        ? state
        : {
            ...state,
            [payload.formName]: []
          };
    case actionTypes.CREATE_FIELD:
      return Object.keys(state).includes(payload.formName)
        ? {
            ...state,
            [payload.formName]: [
              ...new Set([...state[payload.formName], payload.fieldName])
            ]
          }
        : state;
    default:
      return state;
  }
}

function fieldValueRecuder(state = {}, { type, payload }) {
  const fieldKeyName = getFormFieldKey(payload.formName, payload.fieldName);
  switch (type) {
    case actionTypes.CREATE_FIELD:
      return Object.keys(state).includes(fieldKeyName)
        ? state
        : {
            ...state,
            [fieldKeyName]: DEFAULT_FIELD_VALUE
          };
    case actionTypes.UPDATE_FIELD_VALUE:
      return Object.keys(state).includes(fieldKeyName)
        ? {
            ...state,
            [fieldKeyName]: payload.value
          }
        : state;
    default:
      return state;
  }
}

function errorsReducer(state = {}, { type, payload }) {
  const fieldKeyName = getFormFieldKey(
    payload.formName,
    payload.fieldName || FORM_AS_FIELD_NAME // CREATE_FORM does not have payload.fieldName
  );
  switch (type) {
    case actionTypes.CREATE_FORM:
    case actionTypes.CREATE_FIELD:
      return Object.keys(state).includes(fieldKeyName)
        ? state
        : {
            ...state,
            [fieldKeyName]: DEFAULT_ERROR
          };
    case actionTypes.UPDATE_FIELD_VALUE:
      return Object.keys(state).includes(fieldKeyName)
        ? {
            ...state,
            [fieldKeyName]: DEFAULT_ERROR
          }
        : state;
    case actionTypes.UPDATE_ERROR:
      return Object.keys(state).includes(fieldKeyName)
        ? {
            ...state,
            [fieldKeyName]: payload.error
          }
        : state;
    default:
      return state;
  }
}

export default combineReducers({
  // formMeta: formMetaRecuder,
  // fieldMeta: fieldMetaRecuder,
  formFields: formFieldsRecuder,
  fieldValue: fieldValueRecuder,
  errors: errorsReducer
});

export { formFieldsRecuder, fieldValueRecuder, errorsReducer };
