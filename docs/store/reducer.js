import { combineReducers } from 'redux';

import greetReducer from './greet/reducer';

export default combineReducers({
  greet: greetReducer,
});
