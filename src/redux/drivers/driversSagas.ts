import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import * as type from './driversTypes';

import { fetchDriversSuccess } from './driversActions';
import { IDriver } from '../../interfaces/driversInterfaces';

axios.defaults.baseURL = 'https://edu.evgeniychvertkov.com/v1';
axios.defaults.headers.common['X-Authorization'] =
  'apie05b4a902436848782d6f233ae1715330c0f4d52e4efa41e315378e5256bf7d3';

// interface IDriver {
//   id?: number;
//   first_name: string;
//   last_name: string;
//   date_birth: number;
//   date_created?: number;
//   status: {
//     title: string;
//     code: string;
//   };
// }

export async function fetchDriversApi(): Promise<IDriver[]> {
  const response = await axios.get('/driver/');
  const { data }: { data: IDriver[] } = response.data;

  return data;
}

export function* fetchDriversWorker() {
  try {
    const drivers = (yield call(fetchDriversApi)) as IDriver[];
    yield put(fetchDriversSuccess(drivers));
  } catch (error) {}
}

export function* driversWatcher() {
  yield takeLatest(type.FETCH_DRIVERS_REQUEST, fetchDriversWorker);
}
