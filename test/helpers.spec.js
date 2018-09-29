import { updateFormErrors } from '../src/helpers';

describe('updateFormErrors', () => {
  it('returns fields with error', () => {
    const state = {
      fields: {
        username: { value: 'Admin' },
        password: { value: 'secure' },
      },
    };
    const errors = {
      username: 'Forbidden username',
    };
    const result = updateFormErrors(errors, ['username', 'password'])(state);
    expect(state).toStrictEqual({
      fields: {
        username: { value: 'Admin' },
        password: { value: 'secure' },
      },
    });
    expect(result).toStrictEqual({
      fields: {
        password: {
          value: 'secure',
        },
        username: {
          error: 'Forbidden username',
          isTouched: true,
          value: 'Admin',
        },
      },
    });
  });

  it('can unset error by falsy error values', () => {
    const state = {
      fields: {
        username: { value: 'Admin', error: 'Invalid', isTouched: true },
        password: { value: 'secure', error: 'Invalid', isTouched: true },
      },
    };
    const errors = {
      username: null,
      password: undefined,
    };
    const result = updateFormErrors(errors, ['username', 'password'])(state);
    expect(state).toStrictEqual({
      fields: {
        username: { value: 'Admin', error: 'Invalid', isTouched: true },
        password: { value: 'secure', error: 'Invalid', isTouched: true },
      },
    });
    expect(result).toStrictEqual({
      fields: {
        username: { error: null, isTouched: true, value: 'Admin' },
        password: { error: null, isTouched: true, value: 'secure' },
      },
    });
  });

  it('also works with form error', () => {
    const state = {
      fields: {
        username: { value: 'Admin' },
        password: { value: 'secure' },
      },
    };
    const errors = {
      username: 'Forbidden username',
      form: 'Something went wrong',
    };
    const result = updateFormErrors(errors, ['username', 'password'])(state);
    expect(state).toStrictEqual({
      fields: {
        username: { value: 'Admin' },
        password: { value: 'secure' },
      },
    });
    expect(result).toStrictEqual({
      error: 'Something went wrong',
      fields: {
        password: {
          value: 'secure',
        },
        username: {
          error: 'Forbidden username',
          isTouched: true,
          value: 'Admin',
        },
      },
    });
  });

  it('returns null when input errors is falsy or empty', () => {
    const state = {
      fields: {
        username: { value: 'Admin' },
        password: { value: 'secure' },
      },
    };
    expect(updateFormErrors({}, ['username', 'password'])(state)).toStrictEqual(
      null
    );
    expect(
      updateFormErrors(null, ['username', 'password'])(state)
    ).toStrictEqual(null);
    expect(
      updateFormErrors(undefined, ['username', 'password'])(state)
    ).toStrictEqual(null);
    expect(state).toStrictEqual({
      fields: {
        username: { value: 'Admin' },
        password: { value: 'secure' },
      },
    });
  });

  it('ignores the invalid fields', () => {
    const state = {
      fields: {
        username: { value: 'Admin' },
        password: { value: 'secure' },
      },
    };
    const errors = {
      unknown: 'Forbidden username',
      password: 'Password too secure',
      form: 'Something went wrong',
    };
    const result = updateFormErrors(errors, ['username', 'password'])(state);
    expect(state).toStrictEqual({
      fields: {
        username: { value: 'Admin' },
        password: { value: 'secure' },
      },
    });
    expect(result).toStrictEqual({
      error: 'Something went wrong',
      fields: {
        password: {
          error: 'Password too secure',
          isTouched: true,
          value: 'secure',
        },
        username: {
          value: 'Admin',
        },
      },
    });
  });

  it('does not return fields if there is only form error', () => {
    const state = {
      fields: {
        username: { value: 'Admin' },
        password: { value: 'secure' },
      },
    };
    const errors = {
      unknown: 'Forbidden username',
      form: 'Something went wrong',
    };
    const result = updateFormErrors(errors, ['username', 'password'])(state);
    expect(state).toStrictEqual({
      fields: {
        username: { value: 'Admin' },
        password: { value: 'secure' },
      },
    });
    expect(result).toStrictEqual({
      error: 'Something went wrong',
    });
  });
});
