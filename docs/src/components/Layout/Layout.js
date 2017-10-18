import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { theme, variables } from 'styles';
import 'styles/reset.css';
import 'styles/animation.css';

import Brand from './Brand';
import Navigation from './Navigation';

const layout = css`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize}px;
`;

const header = css`
  height: ${variables.Layout.headerHeight}px;
  background-color: ${theme.bgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Layout({ children }) {
  return (
    <div className={layout}>
      <div className={header}>
        <Brand />
        <Navigation height={100} />
      </div>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export { Layout as Component };

export default Layout;
