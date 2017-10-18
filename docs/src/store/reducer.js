import { combineReducers } from 'redux';

import greetReducer from './greet';

export default combineReducers({
  greet: greetReducer
});
