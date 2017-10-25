import delay from './delay';

// For simplicity, this mock API returns the error in the shape that Fiora expects
export const login = async ({ username, password }) => {
  console.log('[Server] [Login] - Processing request...');

  await delay(500);

  const res = {};

  if (username.indexOf('admin') !== -1) {
    res.username = 'Username cannot contain "admin"';
  }

  if (password === 'password') {
    res.password = 'This password is too easy to guess';
  }

  if (username.length === password.length) {
    res.form = 'Username and password cannot be of the same length';
  }

  if (Object.keys(res).length > 0) {
    console.log('[Server] [Login] - Bad Request');
  } else {
    console.log('[Server] [Login] - Request Complete');
  }

  return res;
};

export const createUser = async data => {
  console.log('[Server] - Processing create user request...');
  await delay(500);
  return { ...data, success: true };
};
