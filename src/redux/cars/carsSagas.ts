import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypesCar } from '../cars/carsTypes';
import { ICar } from '../../interfaces/carsInterfaces';
import { fetchCars, deleteCar, fetchCarsByIdDriver } from  '../../components/apiService/apiCars';
import { deleteCarSuccess, fetchCarsSuccess, fetchCarsByIdDriverSuccess } from '../cars/carsActions';

interface IParams<T> {
    type: string;
    payload: T;
  }

function* fetchCarsWorker(){
    try{
    const drivers = (yield call(fetchCars)) as ICar[];
    yield put(fetchCarsSuccess(drivers));
    } catch{

    }
}

function* fetchDriverCarsWorker<T extends number>({payload}: IParams<T>){
  try{
    const driverCars = (yield call (fetchCarsByIdDriver, payload)) as ICar[];
    yield put(fetchCarsByIdDriverSuccess(driverCars));

  } catch{

  }
}

function* deleteCarsWorker<T extends number>({ payload }: IParams<T>){
    try{
      yield call(deleteCar, payload);
      
      yield put(deleteCarSuccess(payload));
    } catch{

    }
}

export function* carsWatcher() {
    yield takeLatest(ActionTypesCar.FETCH_CARS_REQUEST, fetchCarsWorker);
    yield takeLatest(ActionTypesCar.DELETE_CARS_REQUEST, deleteCarsWorker);
    yield takeLatest(ActionTypesCar.FETCH_CARS_DRIVER_REQUEST, fetchDriverCarsWorker);
  }