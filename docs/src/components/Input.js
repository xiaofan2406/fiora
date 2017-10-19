import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  & input {
    border: none;
    border-bottom: 1px solid #3b4045;
    outline: none;
    margin: 4px;
    width: 100px;
    &:focus {
      border-bottom: 1px solid #00bcd4;
    }
  }
`;

const helperStyle = css`
  height: 24px;
  color: #3b4045;
`;

function Input({ error, feedback, ...rest }) {
  return (
    <div className={wrapperStyle}>
      <input {...rest} />
      <div className={helperStyle}>{error || feedback}</div>
    </div>
  );
}

Input.propTypes = {
  error: PropTypes.string,
  feedback: PropTypes.string
};

Input.defaultProps = {
  error: '',
  feedback: ''
};

export default Input;
