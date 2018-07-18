/* @flow */
import React from 'react';
import { css } from 'react-emotion';
import { fontSizes, spacing } from 'styles';
import { APP_TITLE } from 'utils/constants';
import logo from 'assets/logo.svg';

const cssBrand = css`
  display: flex;
  align-items: center;
  padding: ${spacing.internal}px;
  & > .logo {
    animation: spin infinite 10s linear;
    height: 36px;
  }
  & > .title {
    animation: fadeIn 2s ease;
    font-size: ${fontSizes.large}px;
  }
`;

class Brand extends React.Component<{}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className={cssBrand}>
        <img src={logo} alt="logo" className="logo" />
        <span className="title">{APP_TITLE}</span>
      </div>
    );
  }
}

export { Brand as Component };

export default Brand;
