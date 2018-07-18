/* @flow */
import * as React from 'react';

type FieldProps = {
  formName: string,
};

class Field extends React.PureComponent<FieldProps> {
  componentDidMount() {
    console.log('mount');
  }

  render() {
    console.log('render Field', this.props.formName);
    return <input />;
  }
}

export default Field;
