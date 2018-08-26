/* @flow */
export const delay = (ms: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export const signUp = async ({
  username,
  password,
}: {
  username: string,
  password: string,
}) => {
  await delay(500);
  const errors = {};
  if (username === 'admin') {
    errors.username = 'Username is not allowed';
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
