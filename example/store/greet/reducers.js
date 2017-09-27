import { combineReducers } from 'redux';

import actionTypes from './actions';

export const initialMessage = 'World';

export function messageReducer(state = initialMessage, action) {
  switch (action.type) {
    case actionTypes.SET_MESSAGE:
      return action.payload;
    case actionTypes.RESET:
      return initialMessage;
    default:
      return state;
  }
}

export const initialTimes = 1;

export function timesReducer(state = initialTimes, action) {
  switch (action.type) {
    case actionTypes.SET_TIMES:
      return action.payload;
    case actionTypes.RESET:
      return initialTimes;
    default:
      return state;
  }
}

export default combineReducers({
  message: messageReducer,
  times: timesReducer
});
