import { put, call, takeLatest } from 'redux-saga/effects';
import * as type from './driversTypes';
import {
  deleteDriverError,
  deleteDriverSuccess,
  fetchDriversError,
  fetchDriversSuccess,
} from './driversActions';
import { IDriver } from '../../interfaces/driversInterfaces';
import {
  deleteDriver,
  fetchDrivers,
} from '../../components/apiService/apiDrivers';

interface IParams<T> {
  type: string;
  payload: T;
}

function* fetchDriversWorker() {
  try {
    const drivers = (yield call(fetchDrivers)) as IDriver[];
    yield put(fetchDriversSuccess(drivers));
  } catch (error) {
    yield put(fetchDriversError(error));
  }
}

function* deleteDriverWorker<T extends number>({ payload }: IParams<T>) {
  try {
    yield call(deleteDriver, payload);
    yield put(deleteDriverSuccess(payload));
  } catch (error) {
    yield deleteDriverError(error);
  }
}

export function* driversWatcher() {
  yield takeLatest(type.FETCH_DRIVERS_REQUEST, fetchDriversWorker);
  yield takeLatest(type.DELETE_DRIVER_REQUEST, deleteDriverWorker);
}
