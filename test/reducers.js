import * as redux from 'redux';

test('combine reducers have correct key names', () => {
  const combineSpy = jest.spyOn(redux, 'combineReducers');
  require('../src/reducer');
  expect(combineSpy).toHaveBeenCalledTimes(1);
  expect(combineSpy.mock.calls[0][0]).toHaveProperty('formFields');
  expect(combineSpy.mock.calls[0][0]).toHaveProperty('fieldValue');
  expect(combineSpy.mock.calls[0][0]).toHaveProperty('fieldMeta');
  expect(combineSpy.mock.calls[0][0]).toHaveProperty('errors');
});
