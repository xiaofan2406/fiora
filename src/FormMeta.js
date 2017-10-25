import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  getFormError,
  getIsFormValidating,
  getIsFormSubmitting
} from './selectors';
import { DEFAULT_ERROR } from './helpers';
import withFiora from './withFiora';

// the props passed in are flags to indicate whether to subscribe to the meta
// the injected value for `children` render function are actual value in store
function FormMeta({ children, error, isValidating, isSubmitting }) {
  return children({ error, isValidating, isSubmitting });
}

FormMeta.propTypes = {
  children: PropTypes.func.isRequired,
  error: PropTypes.any,
  isValidating: PropTypes.bool,
  isSubmitting: PropTypes.bool
};

FormMeta.defaultProps = {
  error: DEFAULT_ERROR,
  isValidating: false,
  isSubmitting: false
};

// props.formName is injected by `withFiora`
export const mapStateToProps = (
  state,
  { formName, error, isValidating, isSubmitting }
) => {
  const props = {};
  if (error) props.error = getFormError(state, { formName });
  if (isValidating)
    props.isValidating = getIsFormValidating(state, { formName });
  if (isSubmitting)
    props.isSubmitting = getIsFormSubmitting(state, { formName });
  return props;
};

const enhance = compose(withFiora(), connect(mapStateToProps));

export default enhance(FormMeta);

export { FormMeta as Component };
