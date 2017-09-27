/**
 * @see https://github.com/yuanyan/halogen/blob/master/src/RingLoader.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'emotion/react';

const LoaderContainer = styled.div`
  display: inline-block;
  & > div {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    position: relative;
    & div {
      width: ${({ size }) => size}px;
      height: ${({ size }) => size}px;
      border-style: solid;
      border-width: ${({ size }) => size / 10}px;
      border-color: ${({ color }) => color};
      opacity: 0.4;
      border-radius: 100%;
      position: absolute;
      top: 0;
      left: 0;
      perspective: 800px;
      animation-fill-mode: forwards;
    }
    & div:first-child {
      animation: loaderRigthRotate 2s 0s infinite linear;
    }
    & div:nth-child(2) {
      animation: loaderLeftRotate 2s 0s infinite linear;
    }
  }
`;

function Loader(props) {
  return (
    <LoaderContainer {...props}>
      <div>
        <div />
        <div />
      </div>
    </LoaderContainer>
  );
}

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
};

Loader.defaultProps = {
  color: '#e8e8e8',
  size: 60
};

export { Loader as Component };

export default Loader;
