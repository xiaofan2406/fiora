import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createField, updateFieldValue, updateError } from './actions';
import { getFieldValue, getError } from './selectors';
import withFiora from './withFiora';

function Field({
  onValidate,
  value,
  formName,
  name,
  dispatch,
  error,
  children
}) {
  // return true if there IS error
  const handleValidate = async () => {
    const validationError = await onValidate(value);

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
  onValidate: PropTypes.func.isRequired,
  error: PropTypes.any,
  value: PropTypes.any.isRequired,
  formName: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state, { formName, name }) => ({
  value: getFieldValue(state, { formName, fieldName: name }),
  error: getError(state, { formName, fieldName: name })
});

const enhance = compose(
  withFiora({
    initialize: (
      { name, initialValue },
      { fiora: { formName }, store: { dispatch } }
    ) => {
      dispatch(createField(formName, name));
      if (initialValue) {
        dispatch(updateFieldValue(formName, name, initialValue));
      }
    }
  }),
  connect(mapStateToProps)
);

export default enhance(Field);
