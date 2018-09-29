import React from 'react';
import PropTypes from 'prop-types';
import CodeDisplay from './CodeDisplay';
import createFiora from '../../../../src';

function PreComponent({ children }) {
  const { children: code, ...rest } = children.props;
  const fiora = createFiora();

  return <CodeDisplay code={code} scope={fiora} {...rest} />;
}

PreComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PreComponent;
