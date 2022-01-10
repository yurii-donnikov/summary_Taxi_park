import { combineReducers } from 'redux';
import driversReducer from './drivers/driversReducer';

const rootReducer = combineReducers({
  drivers: driversReducer,
});

export default rootReducer;
