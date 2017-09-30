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

// function formMetaRecuder(state = {}, action) {
//   switch (action.type) {
//     case actionTypes.CREATE_FORM:
//       return {
//         ...state,
//         [action.formName]: initialFormMeta
//       };
//     default:
//       return state;
//   }
// }

// const initialFieldMeta = {
//   touched: false
// };

// function fieldMetaRecuder(state = {}, action) {
//   switch (action.type) {
//     case actionTypes.CREATE_FIELD:
//       return {
//         ...state,
//         [getFormFieldKey(action.formName, action.fieldName)]: initialFieldMeta
//       };
//     default:
//       return state;
//   }
// }

function formFieldsRecuder(state = {}, action) {
  switch (action.type) {
    case actionTypes.CREATE_FORM:
      return Object.keys(state).includes(action.formName)
        ? state
        : {
            ...state,
            [action.formName]: []
          };
    case actionTypes.CREATE_FIELD:
      return Object.keys(state).includes(action.formName)
        ? {
            ...state,
            [action.formName]: [
              ...new Set([...state[action.formName], action.fieldName])
            ]
          }
        : state;
    default:
      return state;
  }
}

function fieldValueRecuder(state = {}, action) {
  const fieldKeyName = getFormFieldKey(action.formName, action.fieldName);
  switch (action.type) {
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
            [fieldKeyName]: action.value
          }
        : state;
    default:
      return state;
  }
}

function errorsReducer(state = {}, action) {
  const fieldKeyName = getFormFieldKey(
    action.formName,
    action.fieldName || FORM_AS_FIELD_NAME // CREATE_FORM does not have action.fieldName
  );
  switch (action.type) {
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
            [fieldKeyName]: action.error
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
