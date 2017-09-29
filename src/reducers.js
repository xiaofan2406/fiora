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
    case actionTypes.CREATE_FORM: {
      if (Object.keys(state).includes(payload.formName)) {
        return state;
      }
      return {
        ...state,
        [payload.formName]: []
      };
    }
    case actionTypes.CREATE_FIELD: {
      if (Object.keys(state).includes(payload.formName)) {
        return {
          ...state,
          [payload.formName]: [
            ...new Set([...state[payload.formName], payload.fieldName])
          ]
        };
      }
      return state;
    }
    default:
      return state;
  }
}

function fieldValueRecuder(state = {}, { type, payload }) {
  switch (type) {
    case actionTypes.CREATE_FIELD:
      return {
        ...state,
        [getFormFieldKey(
          payload.formName,
          payload.fieldName
        )]: DEFAULT_FIELD_VALUE
      };
    case actionTypes.UPDATE_FIELD_VALUE: {
      // This does NOT protect it if the form does not exist
      const fieldKeyName = getFormFieldKey(payload.formName, payload.fieldName);
      if (Object.keys(state).includes(fieldKeyName)) {
        return {
          ...state,
          [fieldKeyName]: payload.value
        };
      }
      return state;
    }
    default:
      return state;
  }
}

function errorsReducer(state = {}, { type, payload }) {
  switch (type) {
    case actionTypes.CREATE_FIELD:
    case actionTypes.UPDATE_FIELD_VALUE:
      return {
        ...state,
        [getFormFieldKey(payload.formName, payload.fieldName)]: DEFAULT_ERROR
      };
    case actionTypes.CREATE_FORM:
      return {
        ...state,
        [getFormFieldKey(payload.formName, FORM_AS_FIELD_NAME)]: DEFAULT_ERROR
      };
    case actionTypes.UPDATE_ERROR: {
      const fieldKeyName = getFormFieldKey(payload.formName, payload.fieldName);
      if (Object.keys(state).includes(fieldKeyName)) {
        return {
          ...state,
          [fieldKeyName]: payload.error
        };
      }
      return state;
    }
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
