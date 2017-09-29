import * as helpers from '../src/helpers';

test('getFormFieldKey returns the correct key name', () => {
  const key = helpers.getFormFieldKey('login', 'username');
  expect(key).toBe('username@login');
});
