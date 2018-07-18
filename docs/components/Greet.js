import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'react-emotion';
import { theme, fontSizes, spacing, verticalScroll } from 'styles';
import { actions, selectors } from 'store/greet';

const cssGreet = css`
  margin: 0px auto;
  width: 480px;
  & > .controls {
    text-align: center;
    & input {
      border: none;
      border-bottom: 1px solid ${theme.borderColor};
      outline: none;
      width: 100px;
      text-align: center;
      &:focus {
        border-bottom: 1px solid ${theme.primaryColor};
      }
    }
    & > button {
      margin-left: 1em;
      outline: none;
      background: none;
      border: 1px solid ${theme.borderColor};
      &:hover {
        border-color: ${theme.primaryColor};
        color: ${theme.primaryColor};
      }
    }
  }
  & > .result {
    height: 280px;
    ${verticalScroll};
    margin-top: ${spacing.external}px;
    font-size: ${fontSizes.large}px;
    font-family: cursive;
    &:before {
      content: '"';
    }
    &:after {
      content: '"';
    }
  }
`;

const Greet = ({ message, setMessage, times, setTimes, reset, greeting }) => {
  const handleTimesOnChange = event => {
    setTimes(+event.target.value || 0);
  };

  const handleMessageOnChange = event => {
    setMessage(event.target.value);
  };

  return (
    <div className={cssGreet}>
      <div className="controls">
        <span>Say </span>
        <input
          type="text"
          onChange={handleMessageOnChange}
          value={message}
        />{' '}
        <input
          type="number"
          min={1}
          onChange={handleTimesOnChange}
          value={times}
        />{' '}
        times
        <button onClick={reset} type="button">
          Clear
        </button>
      </div>
      <div className="result">Hello {greeting}</div>
    </div>
  );
};

Greet.propTypes = {
  message: PropTypes.string.isRequired,
  times: PropTypes.number.isRequired,
  greeting: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
  setTimes: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  message: selectors.getMessage(state),
  times: selectors.getTimes(state),
  greeting: selectors.getGreeting(state),
});

export { Greet as Component };

export default connect(
  mapStateToProps,
  {
    setMessage: actions.setMessage,
    setTimes: actions.setTimes,
    reset: actions.reset,
  }
)(Greet);
