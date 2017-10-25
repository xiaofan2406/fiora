import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { theme, variables } from 'styles';
import 'styles/reset.css';
import 'styles/animation.css';

import Brand from './Brand';
import Navigation from './Navigation';

const Container = styled('div')`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize}px;
  & .header {
    height: ${variables.Layout.headerHeight}px;
    background-color: ${theme.bgColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

function Layout({ children }) {
  return (
    <Container>
      <div className="header">
        <Brand />
        <Navigation height={100} />
      </div>
      {children}
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export { Layout as Component };

export default Layout;
