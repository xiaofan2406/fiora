import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  background-color: #fdfdfd;
  padding: 16px;
  margin: 6px 0px;
  &:hover {
    box-shadow: 0 1px 6px #e8e8e8;
  }
  & .input {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & .label {
      padding-right: 8px;
    }

    & input {
      border: 1px solid #e8e8e8;
      padding: 6px;
      outline: none;
      margin: 8px 0px;
      height: 32px;
      width: 100%;
      &:focus {
        border: 1px solid #00bcd4;
      }
    }
  }

  & .meta {
    margin: 4px;
    height: 24px;
    color: #3b4045;

    & .metaValue {
      font-size: 12px;
      font-family: monospace;
    }
  }
`;

const Input = ({ label, value, error, isValidating, isTouched, ...rest }) => (
  <Container>
    <div className="input">
      <span className="label">{label}: </span>
      <input value={value} {...rest} />
    </div>
    <p className="meta">
      value: <span className="metaValue">{value}</span>
    </p>
    <p className="meta">
      error: <span className="metaValue">{error}</span>
    </p>
    <p className="meta">
      isValidating: <span className="metaValue">{`${isValidating}`}</span>
    </p>
    <p className="meta">
      isTouched: <span className="metaValue">{`${isTouched}`}</span>
    </p>
  </Container>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  isValidating: PropTypes.bool.isRequired,
  isTouched: PropTypes.bool.isRequired,
};

Input.defaultProps = {
  error: '',
};

export default Input;
