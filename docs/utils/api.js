/* @flow */
export const delay = (ms: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export const signUp = async ({ username, password }) => {
  await delay(500);
  const errors = {};
  if (username === 'admin') {
    errors.username = 'Invalid useranme';
  }
  if (password === 'password') {
    errors.password = 'Password is insecure';
  }
  if (username === password) {
    errors.form = 'Password should not be similar to username';
  }
  return Object.keys(errors).length > 0
    ? { status: 400, errors }
    : { status: 200 };
};

export const login = async ({ username, password }) => {
  await delay(500);
  if (username.length < 5) {
    return { username: 'Invalid username' };
  }

  if (username === password) {
    return { form: 'Username and password should be different' };
  }
  return undefined;
};
