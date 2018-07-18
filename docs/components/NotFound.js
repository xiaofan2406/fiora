/* @flow */
import * as React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    404 Nothing here. Go to <Link to="/">homepage</Link>
  </div>
);

export { NotFound as Component };

export default NotFound;
