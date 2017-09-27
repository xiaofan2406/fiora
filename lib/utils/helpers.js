export const getFormFieldKey = ({ formName, fieldName }) =>
  `${fieldName}@${formName}`;

export const DEFAULT_FIELD_VALUE = '';

export const DEFAULT_ERROR = null;

export const isEmpty = target =>
  !target ||
  (Array.isArray(target) && target.length === 0) ||
  (typeof target === 'string' && target.length === 0) ||
  (typeof target === 'object' && Object.keys(target).length === 0);
