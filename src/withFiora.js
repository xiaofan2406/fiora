import React from 'react';
import PropTypes from 'prop-types';
import { storeShape } from 'react-redux/lib/utils/PropTypes';

const withFiora = ({ initialize } = {}) => Component => {
  class C extends React.Component {
    static contextTypes = {
      fiora: PropTypes.object,
      store: storeShape
    };

    componentWillMount() {
      if (typeof initialize === 'function') {
        initialize(this.props, this.context);
      }
    }

    render() {
      return (
        <Component {...this.props} formName={this.context.fiora.formName} />
      );
    }
  }

  C.displayName = `withFiora(${Component.displayName || Component.name})`;

  return C;
};

export default withFiora;
