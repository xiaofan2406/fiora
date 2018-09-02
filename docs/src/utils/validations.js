export const usernameValidation = username => {
  if (!username) {
    return 'Username is required';
  }
  if (username.length < 5) {
    return 'Username should be as least 5 characters';
  }
  return null;
};

export const passwordValidation = password => {
  if (!password) {
    return 'Password is required';
  }
  if (password.length < 6) {
    return 'Password should be as least 6 characters';
  }
  return null;
};

export const passwordRepeatValidation = password => passwordRepeat => {
  const baseError = passwordValidation(passwordRepeat);

  if (baseError) return baseError;

  if (passwordRepeat !== password) {
    return 'Passwords do not match';
  }

  return null;
};
