import { ActionTypesCar } from "../cars/carsTypes";

interface IAction<P> {
    type: string;
    payload?: P;
  }
export const fetchCarsRequest = <P>(): IAction<P> => ({
    type: ActionTypesCar.FETCH_CARS_REQUEST,
  });
  
  export const fetchCarsSuccess = <P>(data: P): IAction<P> => ({
    type: ActionTypesCar.FETCH_CARS_SUCCESS,
    payload: data,
  });
  export const fetchCarsByIdDriverRequest = <P>(data: P): IAction<P> => ({
    type: ActionTypesCar.FETCH_CARS_DRIVER_REQUEST,
    payload: data,
  });
  export const fetchCarsByIdDriverSuccess = <P>(data: P): IAction<P> => ({
    type: ActionTypesCar.FETCH_CARS_DRIVER_SUCCESS,
    payload: data,
  });
  export const deleteCarRequest = <P>(data: P): IAction<P> => ({
    type: ActionTypesCar.DELETE_CARS_REQUEST,
    payload: data,
  });
  
  export const deleteCarSuccess = <P>(data: P): IAction<P> => ({
    type: ActionTypesCar.DELETE_CARS_SUCCESS,
    payload: data,
  });
  
  export const deleteCarError = <P>(data: P): IAction<P> => ({
    type: ActionTypesCar.DELETE_CARS_ERROR,
    payload: data,
  });