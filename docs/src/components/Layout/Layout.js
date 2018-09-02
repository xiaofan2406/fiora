/* @flow */
import * as React from 'react';
import { css } from 'react-emotion';
import { theme, spacing } from 'styles';
import Brand from './Brand';

const cssLayout = css`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize}px;
  color: ${theme.textColor};
  & p {
    margin: 0px 0px 1em 0px;
  }
  & > .main {
    width: 780px;
    padding: 0px ${spacing.internal}px;
    margin: ${spacing.break}px auto;
  }
`;

type LayoutProps = {
  children: React.Node,
};

const Layout = ({ children }: LayoutProps) => (
  <div className={cssLayout}>
    <Brand />
    <div className="main">{children}</div>
  </div>
);

export { Layout as Component };

export default Layout;
