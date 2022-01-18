import { createCarSuccess, fetchCarStatusesSuccess } from './carsActions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypesCar } from '../cars/carsTypes';
import { ICar, IStatusCar } from '../../interfaces/carsInterfaces';
import {
  fetchCars,
  deleteCar,
  fetchCarsByIdDriver,
  fetchCarsStatuses,
  createCar,
} from '../../components/apiService/apiCars';
import {
  deleteCarSuccess,
  fetchCarsSuccess,
  fetchCarsByIdDriverSuccess,
} from '../cars/carsActions';

interface IParams<T> {
  type: string;
  payload: T;
}

function* fetchCarsWorker() {
  try {
    const cars = (yield call(fetchCars)) as ICar[];
    yield put(fetchCarsSuccess(cars));
  } catch {}
}

function* fetchDriverCarsWorker<T extends number>({ payload }: IParams<T>) {
  try {
    const driverCars = (yield call(fetchCarsByIdDriver, payload)) as ICar[];
    yield put(fetchCarsByIdDriverSuccess(driverCars));
  } catch {}
}

function* deleteCarsWorker<T extends number>({ payload }: IParams<T>) {
  try {
    yield call(deleteCar, payload);

    yield put(deleteCarSuccess(payload));
  } catch {}
}

function* fetchCarsStatusWorker() {
  try {
    const statuses = (yield call(fetchCarsStatuses)) as IStatusCar[];
    yield put(fetchCarStatusesSuccess(statuses));
  } catch {}
}

function* createCarWorker<T extends ICar>({
  payload,
}: IParams<T>): Generator {
  try {
    const car = (yield call(createCar, payload)) as ICar;
    yield put(createCarSuccess(car));
  } catch {}
}

export function* carsWatcher() {
  yield takeLatest(ActionTypesCar.FETCH_CARS_REQUEST, fetchCarsWorker);
  yield takeLatest(ActionTypesCar.DELETE_CARS_REQUEST, deleteCarsWorker);
  yield takeLatest(
    ActionTypesCar.FETCH_CARS_DRIVER_REQUEST,
    fetchDriverCarsWorker,
  );
  yield takeLatest(
    ActionTypesCar.FETCH_CARS_STATUSES_REQUEST,
    fetchCarsStatusWorker,
  );
  yield takeLatest(ActionTypesCar.CREATE_CARS_REQUEST, createCarWorker);
}
