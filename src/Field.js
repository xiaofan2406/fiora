import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  createField,
  updateFieldValue,
  startValidatingField,
  finishValidatingField,
  updateError
} from './actions';
import { getFieldValue, getError } from './selectors';
import withFiora from './withFiora';

function Field({
  name,
  children,
  onValidate,
  value,
  error,
  formName,
  dispatch
}) {
  // return true if there is error
  const handleValidate = async () => {
    dispatch(startValidatingField(formName, name));
    const validationError = await onValidate(value);
    dispatch(finishValidatingField(formName, name));
    if (validationError) {
      dispatch(updateError(formName, name, validationError));
      return true;
    }
    return false;
  };

  const handleChange = newValue =>
    dispatch(updateFieldValue(formName, name, newValue));

  return children({
    value,
    error,
    handleChange,
    handleValidate
  });
}

Field.propTypes = {
  name: PropTypes.any.isRequired,
  children: PropTypes.func.isRequired,
  onValidate: PropTypes.func,
  initialValue: PropTypes.any,
  value: PropTypes.any.isRequired,
  error: PropTypes.any,
  formName: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

Field.defaultProps = {
  onValidate: async () => null
};

export const mapStateToProps = (state, { formName, name }) => ({
  value: getFieldValue(state, { formName, fieldName: name }),
  error: getError(state, { formName, fieldName: name })
});

export const initialize = (
  { name, onValidate, initialValue },
  { fiora: { formName, setValidateFunc }, store: { dispatch } }
) => {
  dispatch(createField(formName, name));
  if (initialValue) {
    dispatch(updateFieldValue(formName, name, initialValue));
  }
  setValidateFunc(name, onValidate);
};

const enhance = compose(withFiora({ initialize }), connect(mapStateToProps));

export default enhance(Field);

export { Field as Component };
