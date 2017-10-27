import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  createField,
  updateFieldValue,
  updateFieldError,
  startValidatingField,
  finishValidatingField
} from './actions';
import {
  getFieldValue,
  getFieldError,
  getIsFieldValidating,
  getIsFieldTouched
} from './selectors';
import withFiora from './withFiora';

function Field({
  name: fieldName,
  onValidate,
  children,
  value,
  error,
  isValidating,
  isTouched,
  formName,
  dispatch
}) {
  // return true if there is error
  const handleValidate = async () => {
    dispatch(startValidatingField(formName, fieldName));
    const validationError = await onValidate(value);
    dispatch(finishValidatingField(formName, fieldName));

    if (validationError) {
      dispatch(updateFieldError(formName, fieldName, validationError));
      return true;
    }
    return false;
  };

  const handleChange = newValue =>
    dispatch(updateFieldValue(formName, fieldName, newValue));

  return children({
    value,
    error,
    isValidating,
    isTouched,
    handleChange,
    handleValidate
  });
}

Field.propTypes = {
  name: PropTypes.any.isRequired,
  initialValue: PropTypes.any,
  onValidate: PropTypes.func,
  children: PropTypes.func.isRequired,

  // injected props
  value: PropTypes.any.isRequired,
  error: PropTypes.any,
  isValidating: PropTypes.bool,
  isTouched: PropTypes.bool,
  formName: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

export const mapState = (state, { formName, name: fieldName }) => ({
  value: getFieldValue(state, { formName, fieldName }),
  error: getFieldError(state, { formName, fieldName }),
  isValidating: getIsFieldValidating(state, { formName, fieldName }),
  isTouched: getIsFieldTouched(state, { formName, fieldName })
});

export const initialize = (
  { name: fieldName, onValidate, initialValue }, // props
  { fiora: { formName, setValidateFunc }, store: { dispatch } } // context
) => {
  // create the field before the field is rendered,
  // so that the value is initialized rather than `undefined`
  dispatch(createField(formName, fieldName));
  if (initialValue) {
    dispatch(updateFieldValue(formName, fieldName, initialValue));
  }
  // set the field's validation function in context
  // so that the form handleSubmit is aware of how to validate each field
  setValidateFunc(fieldName, onValidate);
};

const enhanced = compose(withFiora({ initialize }), connect(mapState))(Field);

enhanced.defaultProps = {
  onValidate: async () => null
};

export default enhanced;

export { Field as Component };
