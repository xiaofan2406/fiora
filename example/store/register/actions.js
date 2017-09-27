const actionTypes = {
  SET_USERNAME: 'register/SET_USERNAME',
  SET_PASSWORD: 'register/SET_PASSWORD',
  RESET: 'register/RESET'
};

export default actionTypes;

export const setUsername = payload => ({
  type: actionTypes.SET_USERNAME,
  payload
});

export const setPassword = payload => ({
  type: actionTypes.SET_PASSWORD,
  payload
});

export const reset = () => ({
  type: actionTypes.RESET
});
