import { combineReducers } from 'redux';
import { reducer as fioraReducer } from 'fiora';

export default combineReducers({
  fiora: fioraReducer,
});
