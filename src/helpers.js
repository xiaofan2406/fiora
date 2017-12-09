export const getFormFieldKey = (formName, fieldName) =>
  `${fieldName}@${formName}`;

// To avoid the error of changing uncontrolled component to controlled component,
// all fields should have a default value that is not undefined.
// It cannot be `null` either
export const DEFAULT_VALUE = '';

// Default error value is meant to be a representation of `no error`
// Its boolean equivalant must be false
export const DEFAULT_ERROR = null;

export const FORM_ERROR_KEY = 'form';

export const makeFieldMetaReducer = (meta, override = {}) => (
  state,
  action
) => {
  const fieldKeyName = getFormFieldKey(action.formName, action.fieldName);
  return Object.keys(state).includes(fieldKeyName)
    ? {
        ...state,
        [fieldKeyName]: {
          ...state[fieldKeyName],
          [meta]: action[meta],
          ...override,
        },
      }
    : state;
};

export const makeFormMetaReducer = meta => (state, action) =>
  Object.keys(state).includes(action.formName)
    ? {
        ...state,
        [action.formName]: {
          ...state[action.formName],
          [meta]: action[meta],
        },
      }
    : state;

export const zip = (keys, values) =>
  Object.assign({}, ...keys.map((key, index) => ({ [key]: values[index] })));
