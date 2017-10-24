import * as helpers from '../src/helpers';

test('getFormFieldKey returns the correct key name', () => {
  const key = helpers.getFormFieldKey('login', 'username');
  expect(key).toBe('username@login');
});

test('zip returns an object with first array being keys and second array beging values', () => {
  expect(helpers.zip(['x', 'u'], [1, 2])).toEqual({ x: 1, u: 2 });
  expect(helpers.zip(['x', 'u'], [1])).toEqual({ x: 1 });
  expect(helpers.zip(['x', 'u'], [1, 2, 3])).toEqual({ x: 1, u: 2 });
  expect(helpers.zip(['x'], [])).toEqual({});
  expect(helpers.zip([], [1, 2])).toEqual({});
});
