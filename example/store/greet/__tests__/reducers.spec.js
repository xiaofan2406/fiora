import {
  messageReducer,
  initialMessage,
  timesReducer,
  initialTimes
} from '../reducers';
import actionTypes from '../actions';

describe('messageReducer', () => {
  test('SET_MESSAGE is handled correctly', () => {
    const message = 'React';
    const expectedState = message;

    expect(
      messageReducer(initialMessage, {
        type: actionTypes.SET_MESSAGE,
        payload: message
      })
    ).toBe(expectedState);
  });

  test('RESET is handled correctly', () => {
    const expectedState = initialMessage;

    expect(
      messageReducer(initialMessage, {
        type: actionTypes.RESET
      })
    ).toBe(expectedState);
  });

  test('initial state is return with non-matching action', () => {
    expect(messageReducer(initialMessage, {})).toBe(initialMessage);
  });
});

describe('timesReducer', () => {
  test('SET_TIMES is handled correctly', () => {
    const times = 3;
    const expectedState = times;

    expect(
      timesReducer(initialTimes, {
        type: actionTypes.SET_TIMES,
        payload: times
      })
    ).toBe(expectedState);
  });

  test('RESET is handled correctly', () => {
    const expectedState = initialTimes;

    expect(
      timesReducer(initialTimes, {
        type: actionTypes.RESET
      })
    ).toBe(expectedState);
  });

  test('initial state is return with non-matching action', () => {
    expect(timesReducer(initialTimes, {})).toBe(initialTimes);
  });
});
