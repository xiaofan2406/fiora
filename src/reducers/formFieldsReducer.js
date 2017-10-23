import actionTypes from '../actions';

export default function(state = {}, action) {
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
