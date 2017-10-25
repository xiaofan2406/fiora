import React from 'react';
import styled from 'react-emotion';
import { variables, fontSizes, theme } from 'styles';
import { APP_TITLE } from 'configs';
import logo from 'assets/logo.svg';

const Container = styled('div')`
  display: flex;
  align-items: center;
  & img {
    animation: spin infinite 10s linear;
    height: ${variables.Brand.logoHeight}px;
  }
  & span {
    animation: fadeIn 2s ease;
    font-size: ${fontSizes.large}px;
    color: ${theme.inverseColor};
  }
`;

class Brand extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Container>
        <img src={logo} alt="logo" />
        <span>{APP_TITLE}</span>
      </Container>
    );
  }
}

export { Brand as Component };

export default Brand;
