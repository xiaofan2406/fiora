const actionTypes = {
  UPDATE_PROFILE: 'greet/UPDATE_PROFILE',
};

export default actionTypes;

export const updateProfile = payload => ({
  type: actionTypes.UPDATE_PROFILE,
  payload,
});
