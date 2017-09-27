import * as selectors from '../selectors';

const mockState = { greet: { message: 'hey', times: 3 } };

test('getMessage return the correct state', () => {
  expect(selectors.getMessage(mockState)).toEqual(mockState.greet.message);
});

test('getTimes return the correct state', () => {
  expect(selectors.getTimes(mockState)).toEqual(mockState.greet.times);
});

test('getGreeting return the correct state', () => {
  expect(selectors.getGreeting(mockState)).toEqual('hey hey hey');
});
