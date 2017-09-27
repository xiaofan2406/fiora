import React from 'react';
import PropTypes from 'prop-types';
import { storeShape } from 'react-redux/lib/utils/PropTypes';
import { createField, updateFieldValue } from './actions';
import { DEFAULT_FIELD_VALUE } from './utils/helpers';
import FioraField from './FioraField';

class Field extends React.Component {
  static contextTypes = {
    fiora: PropTypes.object,
    store: storeShape
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
    initialValue: PropTypes.any
  };

  static defaultProps = {
    initialValue: DEFAULT_FIELD_VALUE
  };

  constructor(props, { store, fiora }) {
    super(props);

    store.dispatch(createField(fiora.formName, props.name));
  }

  componentWillMount() {
    const { store: { dispatch }, fiora: { formName } } = this.context;
    const { name, initialValue } = this.props;
    dispatch(updateFieldValue(formName, name, initialValue));
  }

  render() {
    console.log('render Field');
    const { fiora: { formName } } = this.context;
    const { name, children } = this.props;

    return (
      <FioraField formName={formName} fieldName={name}>
        {children}
      </FioraField>
    );
  }
}

export default Field;
