import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getFormError } from './selectors';
import { DEFAULT_ERROR } from './helpers';
import withFiora from './withFiora';

function FormError({ children, error }) {
  return children({ formError: error });
}

FormError.propTypes = {
  children: PropTypes.func.isRequired,
  error: PropTypes.any
};

FormError.defaultProps = {
  error: DEFAULT_ERROR
};

// props.formName is injected by `withFiora`
export const mapStateToProps = (state, { formName }) => ({
  error: getFormError(state, { formName })
});

const enhance = compose(withFiora(), connect(mapStateToProps));

export default enhance(FormError);

export { FormError as Component };
