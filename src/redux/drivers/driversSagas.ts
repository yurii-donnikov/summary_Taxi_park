import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_DRIVERS,
  CREATE_DRIVER,
  DELETE_DRIVER,
  UPDATE_DRIVER,
  FETCH_DRIVER_STATUSES,
} from './driversTypes';

import {
  fetchDrivers,
  createDriver,
  deleteDriver,
  updateDriver,
  fetchStatusesDriver,
} from './driversActions';

axios.defaults.baseURL = 'https://edu.evgeniychvertkov.com/v1';
axios.defaults.headers.common['X-Authorization'] =
  'apie05b4a902436848782d6f233ae1715330c0f4d52e4efa41e315378e5256bf7d3';

interface IDriver {
  id?: number;
  first_name: string;
  last_name: string;
  date_created?: number;
  date_birth: number;
  status: {
    title: string;
    code: string;
  };
}

export async function fetchDriversApi(): Promise<IDriver[]> {
  const response = await axios.get('/driver/');
  const { data }: { data: IDriver[] } = response.data;

  return data;
}

export function* fetchDriversWorker() {
  try {
    const drivers = (yield call(fetchDriversApi)) as IDriver[];
    yield put(fetchDrivers(drivers));
  } catch (error) {}
}

export function* driversWatcher() {
  yield takeEvery(FETCH_DRIVERS, fetchDriversWorker);
}
