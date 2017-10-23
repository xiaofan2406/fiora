import { combineReducers } from 'redux';
import formFieldsReducer from './reducers/formFieldsReducer';
import fieldValueReducer from './reducers/fieldValueReducer';
import fieldMetaReducer from './reducers/fieldMetaReducer';
import errorsReducer from './reducers/errorsReducer';

export default combineReducers({
  formFields: formFieldsReducer,
  fieldValue: fieldValueReducer,
  fieldMeta: fieldMetaReducer,
  errors: errorsReducer
});
