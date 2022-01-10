import {all} from 'redux-saga/effects'
import {driversWatcher} from './drivers/driversSagas'

export function* rootWatcher(){
    yield all([driversWatcher()])
}