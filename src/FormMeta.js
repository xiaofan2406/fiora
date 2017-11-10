import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  getFormError,
  getIsFormValidating,
  getIsFormSubmitting,
  getIsFormTouched,
  getFormHasError
} from './selectors';
import withFiora from './withFiora';

// the props passed in are flags to indicate whether to subscribe to the meta
// the injected value for `children` render function are actual value in store
function FormMeta({
  children,
  error,
  isValidating,
  isSubmitting,
  isTouched,
  hasError
}) {
  return children({ error, isValidating, isSubmitting, isTouched, hasError });
}

FormMeta.propTypes = {
  children: PropTypes.func.isRequired,
  error: PropTypes.any,
  isValidating: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  isTouched: PropTypes.bool,
  hasError: PropTypes.bool
};

// props.formName is injected by `withFiora`
export const mapState = (
  state,
  { formName, error, isValidating, isSubmitting, isTouched, hasError }
) => {
  const props = {};
  if (error) props.error = getFormError(state, { formName });
  if (isValidating)
    props.isValidating = getIsFormValidating(state, { formName });
  if (isSubmitting)
    props.isSubmitting = getIsFormSubmitting(state, { formName });
  if (isTouched) props.isTouched = getIsFormTouched(state, { formName });
  if (hasError) props.hasError = getFormHasError(state, { formName });
  return props;
};

const enhance = compose(withFiora(), connect(mapState));

export default enhance(FormMeta);

export { FormMeta as Component };
