import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateFieldValue } from './actions';
import { getFieldValue } from './selectors';

class FioraField extends React.Component {
  static propTypes = {
    value: PropTypes.any.isRequired,
    formName: PropTypes.string.isRequired,
    fieldName: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  handleChange = newValue => {
    const { dispatch, formName, fieldName } = this.props;

    dispatch(updateFieldValue(formName, fieldName, newValue));
  };

  render() {
    console.log('render FioraField');
    const { value } = this.props;

    return this.props.children({
      value,
      handleChange: this.handleChange
    });
  }
}

const mapStateToProps = (state, { formName, fieldName }) => ({
  value: getFieldValue(state, { formName, fieldName })
});

export default connect(mapStateToProps)(FioraField);
