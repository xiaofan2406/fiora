import actionTypes from '../actions';
import { getFormFieldKey } from '../helpers';

export const initialFieldMeta = () => ({
  isTouched: false,
  isValidating: false
});

export default function(state = {}, action) {
  const fieldKeyName = getFormFieldKey(action.formName, action.fieldName);
  switch (action.type) {
    case actionTypes.CREATE_FIELD:
      return Object.keys(state).includes(fieldKeyName)
        ? state
        : {
            ...state,
            [fieldKeyName]: initialFieldMeta()
          };
    case actionTypes.UPDATE_FIELD_VALUE:
      return Object.keys(state).includes(fieldKeyName)
        ? {
            ...state,
            [fieldKeyName]: {
              ...state[fieldKeyName],
              isTouched: true
            }
          }
        : state;
    case actionTypes.START_VALIDATING_FIELD:
      return Object.keys(state).includes(fieldKeyName)
        ? {
            ...state,
            [fieldKeyName]: {
              ...state[fieldKeyName],
              isValidating: true
            }
          }
        : state;
    case actionTypes.FINISH_VALIDATING_FIELD:
      return Object.keys(state).includes(fieldKeyName)
        ? {
            ...state,
            [fieldKeyName]: {
              ...state[fieldKeyName],
              isValidating: false
            }
          }
        : state;
    default:
      return state;
  }
}
