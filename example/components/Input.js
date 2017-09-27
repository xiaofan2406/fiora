import React from 'react';
import { css } from 'emotion/react';

const inputStyles = css`
  border: none;
  border-bottom: 1px solid #3b4045;
  outline: none;
  margin: 4px;
  width: 100px;
  text-align: center;
  &:focus {
    border-bottom: 1px solid #00bcd4;
  }
`;

function Input(props) {
  console.log('render Input');
  return <input className={inputStyles} {...props} />;
}

export default Input;
