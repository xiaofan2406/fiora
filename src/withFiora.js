import React from 'react';
import PropTypes from 'prop-types';
import { storeShape } from 'react-redux/lib/utils/PropTypes';

const withFiora = ({ initialize, withHandleSubmit } = {}) => Component => {
  class C extends React.Component {
    static contextTypes = {
      fiora: PropTypes.object,
      store: storeShape,
    };

    componentWillMount() {
      if (typeof initialize === 'function') {
        initialize(this.props, this.context);
      }
    }

    render() {
      const fioraProps = { formName: this.context.fiora.formName };
      if (withHandleSubmit) {
        fioraProps.handleSubmit = this.context.fiora.handleSubmit;
      }
      return <Component {...this.props} {...fioraProps} />;
    }
  }

  C.displayName = `withFiora(${Component.displayName || Component.name})`;

  return C;
};

export default withFiora;
