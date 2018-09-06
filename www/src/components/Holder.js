import React from 'react';
import PropTypes from 'prop-types';

function Holder({ children }) {
  console.log(children);
  return <div>Holder</div>;
}

Holder.propTypes = {
  children: PropTypes.node,
};

export default Holder;
