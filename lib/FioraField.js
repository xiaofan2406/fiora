import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateFieldValue } from './actions';
import { getFieldValue, getError } from './selectors';
import { DEFAULT_ERROR } from './utils/helpers';

class FioraField extends React.Component {
  static propTypes = {
    error: PropTypes.any,
    value: PropTypes.any.isRequired,
    formName: PropTypes.string.isRequired,
    fieldName: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  static defaultProps = {
    error: DEFAULT_ERROR
  };

  handleChange = newValue => {
    const { dispatch, formName, fieldName } = this.props;
    dispatch(updateFieldValue(formName, fieldName, newValue));
  };

  render() {
    console.log('render FioraField');
    const { value, error } = this.props;

    return this.props.children({
      value,
      error,
      handleChange: this.handleChange
    });
  }
}

const mapStateToProps = (state, { formName, fieldName }) => ({
  value: getFieldValue(state, { formName, fieldName }),
  error: getError(state, { formName, fieldName })
});

export default connect(mapStateToProps)(FioraField);
