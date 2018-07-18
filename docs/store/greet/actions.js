const actionTypes = {
  SET_MESSAGE: 'greet/SET_MESSAGE',
  SET_TIMES: 'greet/SET_TIMES',
  RESET: 'greet/RESET',
};

export default actionTypes;

export const setMessage = payload => ({
  type: actionTypes.SET_MESSAGE,
  payload,
});

export const setTimes = payload => ({
  type: actionTypes.SET_TIMES,
  payload,
});

export const reset = () => ({
  type: actionTypes.RESET,
});
