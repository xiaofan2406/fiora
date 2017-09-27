import { combineReducers } from 'redux';

import actionTypes from './actions';

export const initialUsername = '';

export function usernameReducer(state = initialUsername, action) {
  switch (action.type) {
    case actionTypes.SET_USERNAME:
      return action.payload;
    case actionTypes.RESET:
      return initialUsername;
    default:
      return state;
  }
}

export const initialPassword = '';

export function passwordReducer(state = initialPassword, action) {
  switch (action.type) {
    case actionTypes.SET_PASSWORD:
      return action.payload;
    case actionTypes.RESET:
      return initialPassword;
    default:
      return state;
  }
}

export default combineReducers({
  username: usernameReducer,
  password: passwordReducer
});
