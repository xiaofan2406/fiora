import actionTypes from './actions';

const initialProfile = {
  name: 'Faker',
  region: 'Korea',
  role: 'mid',
  rank: 100,
};

export default (state = initialProfile, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
