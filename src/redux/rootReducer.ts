import { combineReducers } from 'redux';
import carsReduser from './cars/carsReduser';
import driversReducer from './drivers/driversReducer';

const rootReducer = combineReducers({
  drivers: driversReducer,
  cars: carsReduser,
});

export default rootReducer;
