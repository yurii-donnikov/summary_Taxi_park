import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypesCar } from '../cars/carsTypes';
import { ICar } from '../../interfaces/carsInterfaces';
import { fetchCars, deleteCar } from  '../../components/apiService/apiCars';
import { deleteCarSuccess, fetchCarsSuccess } from '../cars/carsActions';

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

function* deleteCarsWorker<T extends number>({ payload }: IParams<T>){
    try{
      yield call(deleteCar, payload);
      yield console.log(payload);
      yield put(deleteCarSuccess(payload));
    } catch{

    }
}

export function* carsWatcher() {
    yield takeLatest(ActionTypesCar.FETCH_CARS_REQUEST, fetchCarsWorker);
    yield takeLatest(ActionTypesCar.DELETE_CARS_REQUEST, deleteCarsWorker);
  }