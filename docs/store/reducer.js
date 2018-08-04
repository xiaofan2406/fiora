import { combineReducers } from 'redux';

import profileReducer from './profile/reducer';

export default combineReducers({
  profile: profileReducer,
});
