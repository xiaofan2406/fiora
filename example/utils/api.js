function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export const login = async data => {
  console.log('[Server] - Processing login request...');
  await delay(500);

  return {
    success: data.username === 'admin',
    error: data.username === 'admin' || 'Invalid username'
  };
};

export const createUser = async data => {
  console.log('[Server] - Processing create user request...');
  await delay(500);
  return { ...data, success: true };
};
