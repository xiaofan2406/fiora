import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getError } from './selectors';
import { FORM_AS_FIELD_NAME, DEFAULT_ERROR } from './utils/helpers';
import fioralise from './utils/fioralise';

class FormError extends React.Component {
  render() {
    const { children, error } = this.props;
    return children({ formError: error });
  }
}

FormError.propTypes = {
  children: PropTypes.func.isRequired,
  error: PropTypes.any
};

FormError.defaultProps = {
  error: DEFAULT_ERROR
};

const mapStateToProps = (state, { formName }) => ({
  error: getError(state, { formName, fieldName: FORM_AS_FIELD_NAME })
});

const enhance = compose(fioralise(), connect(mapStateToProps));

export default enhance(FormError);
