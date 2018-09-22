import { getInitialValues } from '../src/helpers';

test('getInitialValues copies the initialValue recursively', () => {
  const func = () => null;
  const initialValues = {
    field1: {
      obj: {
        deep: {
          name: 'john',
        },
      },
      arr: [{ ele: 'k' }, [[3]]],
      str: 'Hello',
      num: 13,
      sym: Symbol('kk'),
      nul: null,
      und: undefined,
      func,
    },
  };

  const result = getInitialValues(initialValues);
  result.field1.value.obj.deep.name = 'yo';
  expect(initialValues.field1.obj.deep.name).toBe('john');

  result.field1.value.obj.deep = 'yo';
  expect(initialValues.field1.obj.deep).toEqual({ name: 'john' });

  result.field1.value.arr[1][0].push(4);
  result.field1.value.arr[0].ele2 = 'l';
  expect(initialValues.field1.arr[1][0]).toEqual([3]);
  expect(initialValues.field1.arr[0]).toEqual({ ele: 'k' });

  result.field1.value.str = 'yo';
  expect(initialValues.field1.str).toBe('Hello');

  result.field1.value.num = 14;
  expect(initialValues.field1.num).toBe(13);

  result.field1.value.sym = Symbol('iji');
  expect(initialValues.field1.sym.toString()).toBe('Symbol(kk)');

  result.field1.value.nul = 'not null';
  expect(initialValues.field1.nul).toBe(null);

  result.field1.value.und = {};
  expect(initialValues.field1.und).toBe(undefined);

  result.field1.value.func = {};
  expect(initialValues.field1.func).toBe(func);
});

test('getInitialValues returns an empty object if initialValues is falsy', () => {
  expect(getInitialValues()).toEqual({});
  expect(getInitialValues(null)).toEqual({});
});
