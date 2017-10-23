import actionTypes from '../actions';
import { getFormFieldKey, DEFAULT_ERROR } from '../helpers';

export default function(state = {}, action) {
  const fieldKeyName = getFormFieldKey(action.formName, action.fieldName);
  switch (action.type) {
    case actionTypes.UPDATE_FIELD_VALUE:
      return Object.keys(state).includes(fieldKeyName)
        ? {
            ...state,
            [fieldKeyName]: DEFAULT_ERROR
          }
        : state;
    case actionTypes.UPDATE_ERROR:
      return {
        ...state,
        [fieldKeyName]: action.error
      };
    default:
      return state;
  }
}
