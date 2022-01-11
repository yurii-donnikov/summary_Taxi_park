import * as type from './driversTypes';

interface IAction<T> {
  type: string;
  payload?: T;
}

export const fetchDriversRequest = <T>(): IAction<T> => ({
  type: type.FETCH_DRIVERS_REQUEST,
});

export const fetchDriversSuccess = <T>(data: T): IAction<T> => ({
  type: type.FETCH_DRIVERS_SUCCESS,
  payload: data,
});

export const fetchDriversError = <T>(data: T): IAction<T> => ({
  type: type.FETCH_DRIVERS_SUCCESS,
  payload: data,
});

export const fetchDriverStatusesRequest = <T>(): IAction<T> => ({
  type: type.FETCH_DRIVER_STATUSES_REQUEST,
});

export const fetchDriverStatusesSuccess = <T>(data: T): IAction<T> => ({
  type: type.FETCH_DRIVER_STATUSES_SUCCESS,
  payload: data,
});

export const fetchDriverStatusesError = <T>(data: T): IAction<T> => ({
  type: type.FETCH_DRIVER_STATUSES_ERROR,
  payload: data,
});
 
export const createDriverRequest = <T>(): IAction<T> => ({
  type: type.CREATE_DRIVER_REQUEST,
});

export const createDriverSuccess = <T>(data: T): IAction<T> => ({
  type: type.CREATE_DRIVER_SUCCESS,
  payload: data,
});

export const createDriverError = <T>(data: T): IAction<T> => ({
  type: type.CREATE_DRIVER_ERROR,
  payload: data,
});

export const deleteDriverRequest = <T>(): IAction<T> => ({
  type: type.DELETE_DRIVER_REQUEST,
});

export const deleteDriverSuccess = <T>(data: T): IAction<T> => ({
  type: type.DELETE_DRIVER_SUCCESS,
  payload: data,
});

export const deleteDriverError = <T>(data: T): IAction<T> => ({
  type: type.DELETE_DRIVER_ERROR,
  payload: data,
});

export const updateDriverRequest = <T>(): IAction<T> => ({
  type: type.UPDATE_DRIVER_REQUEST,
});

export const updateDriverSuccess = <T>(data: T): IAction<T> => ({
  type: type.UPDATE_DRIVER_SUCCESS,
  payload: data,
});

export const updateDriverError = <T>(data: T): IAction<T> => ({
  type: type.UPDATE_DRIVER_ERROR,
  payload: data,
});