import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'emotion';
import { theme, colors, fontSizes, spacing } from 'styles';
import { actions, selectors } from 'store/greet';

const greet = css`
  margin: 0 auto;
  width: 460px;
  padding-top: ${spacing.externalBreak}px;
  & input {
    border: none;
    border-bottom: 1px solid ${colors.grey};
    outline: none;
    width: 100px;
    text-align: center;
    &:focus {
      border-bottom: 1px solid ${theme.primaryColor};
    }
  }
  & button {
    margin-left: 1em;
    outline: none;
    background: none;
    border: 1px solid ${colors.grey};
    &:hover {
      border-color: ${theme.primaryColor};
      color: ${theme.primaryColor};
    }
  }
  & .result {
    margin-top: ${spacing.externalBreak}px;
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

function Greet({ message, setMessage, times, setTimes, reset, greeting }) {
  const handleTimesOnChange = event => {
    setTimes(+event.target.value || 0);
  };

  const handleMessageOnChange = event => {
    setMessage(event.target.value);
  };

  return (
    <div className={greet}>
      <div>
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
        <button onClick={reset}>Clear</button>
      </div>
      <div className="result">Hello {greeting}</div>
    </div>
  );
}

Greet.propTypes = {
  message: PropTypes.string.isRequired,
  times: PropTypes.number.isRequired,
  greeting: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
  setTimes: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
  message: selectors.getMessage(state),
  times: selectors.getTimes(state),
  greeting: selectors.getGreeting(state)
});

export { Greet as Component };

export default connect(mapStateToProps, {
  setMessage: actions.setMessage,
  setTimes: actions.setTimes,
  reset: actions.reset
})(Greet);
