import { put, call, takeLatest } from 'redux-saga/effects';
import * as type from './driversTypes';
import {
  createDriverError,
  createDriverSuccess,
  deleteDriverError,
  deleteDriverSuccess,
  fetchDriversError,
  fetchDriversSuccess,
  fetchDriverStatusesError,
  fetchDriverStatusesSuccess,
  updateDriverError,
  updateDriverSuccess,
} from './driversActions';
import {
  IDriver,
  IDriverStatus,
  IUpdatedDriver,
} from '../../interfaces/driversInterfaces';
import {
  createDriver,
  deleteDriver,
  fetchDrivers,
  fetchDriverStatuses,
  updateDriver,
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

function* createDriverWorker<T extends IDriver>({
  payload,
}: IParams<T>): Generator {
  try {
    const driver = (yield call(createDriver, payload)) as IDriver;
    yield put(createDriverSuccess(driver));
  } catch (error) {
    yield put(createDriverError(error));
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

function* fetchDriverStatusesWorker(): Generator {
  try {
    const statuses = (yield call(fetchDriverStatuses)) as IDriverStatus[];
    yield put(fetchDriverStatusesSuccess(statuses));
  } catch (error) {
    yield put(fetchDriverStatusesError(error));
  }
}

function* updateDriverWorker<T extends IUpdatedDriver>({
  payload,
}: IParams<T>): Generator {
  try {
    const updatedDriver = yield call(updateDriver, payload.id, payload);
    yield put(updateDriverSuccess(updatedDriver));
  } catch (error) {
    yield put(updateDriverError(error));
  }
}

export function* driversWatcher() {
  yield takeLatest(type.FETCH_DRIVERS_REQUEST, fetchDriversWorker);
  yield takeLatest(type.CREATE_DRIVER_REQUEST, createDriverWorker);
  yield takeLatest(type.DELETE_DRIVER_REQUEST, deleteDriverWorker);
  yield takeLatest(
    type.FETCH_DRIVER_STATUSES_REQUEST,
    fetchDriverStatusesWorker,
  );
  yield takeLatest(type.UPDATE_DRIVER_REQUEST, updateDriverWorker);
}
