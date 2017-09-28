import React from 'react';
import PropTypes from 'prop-types';
import hoistStatics from 'hoist-non-react-statics';
import { storeShape } from 'react-redux/lib/utils/PropTypes';

const withFiora = (
  { componentWillMount, formNameKey = 'formName' } = {}
) => Component => {
  class C extends React.Component {
    static contextTypes = {
      fiora: PropTypes.object,
      store: storeShape
    };

    static propTypes = {
      children: PropTypes.func.isRequired
    };

    componentWillMount() {
      if (typeof componentWillMount === 'function') {
        componentWillMount(this.props, this.context);
      }
    }

    render() {
      const aditionalProps = {
        [formNameKey]: this.context.fiora.formName
      };

      return <Component {...this.props} {...aditionalProps} />;
    }
  }

  C.displayName = `withFiora(${Component.displayName || Component.name})`;
  C.WrappedComponent = Component;

  return hoistStatics(C, Component);
};

export default withFiora;
