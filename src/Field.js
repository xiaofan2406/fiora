import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createField, updateFieldValue, updateError } from './actions';
import { getFieldValue, getError } from './selectors';
import { DEFAULT_ERROR, DEFAULT_FIELD_VALUE } from './helpers';
import withFiora from './withFiora';

class Field extends React.Component {
  static propTypes = {
    name: PropTypes.any.isRequired,
    children: PropTypes.func.isRequired,
    onValidate: PropTypes.func.isRequired,
    error: PropTypes.any,
    value: PropTypes.any.isRequired,
    formName: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  static defaultProps = {
    error: DEFAULT_ERROR
  };

  // return true if there IS error
  handleValidate = async () => {
    const { onValidate, value, formName, name, dispatch } = this.props;

    const error = await onValidate(value);

    if (error) {
      dispatch(updateError(formName, name, error));
      return true;
    }
    return false;
  };

  handleChange = newValue => {
    const { dispatch, formName, name } = this.props;
    dispatch(updateFieldValue(formName, name, newValue));
  };

  render() {
    console.log('render Field');
    const { value, error } = this.props;

    return this.props.children({
      value,
      error,
      handleChange: this.handleChange,
      handleValidate: this.handleValidate
    });
  }
}

const mapStateToProps = (state, { formName, name }) => ({
  value: getFieldValue(state, { formName, fieldName: name }),
  error: getError(state, { formName, fieldName: name })
});

const enhance = compose(
  withFiora({
    componentWillMount: (
      { name, initialValue = DEFAULT_FIELD_VALUE },
      { fiora: { formName }, store: { dispatch } }
    ) => {
      dispatch(createField(formName, name));
      dispatch(updateFieldValue(formName, name, initialValue));
    }
  }),
  connect(mapStateToProps)
);

export default enhance(Field);
