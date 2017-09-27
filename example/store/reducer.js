import { combineReducers } from 'redux';
import { reducer as fioraReducer } from 'fiora';

import greetReducer from './greet';
import registerReducer from './register';

export default combineReducers({
  greet: greetReducer,
  register: registerReducer,
  fiora: fioraReducer
});
