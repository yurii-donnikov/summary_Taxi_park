import { all } from 'redux-saga/effects';
import { driversWatcher } from './drivers/driversSagas';
import {carsWatcher} from './cars/carsSagas';

export function* rootWatcher() {
  yield all([driversWatcher(), carsWatcher()]);
}
