import actionTypes from '../actions';
import { getFormFieldKey, DEFAULT_FIELD_VALUE } from '../helpers';

export default function(state = {}, action) {
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
