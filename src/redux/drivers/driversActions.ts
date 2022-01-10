import {
  FETCH_DRIVERS,
  CREATE_DRIVER,
  DELETE_DRIVER,
  UPDATE_DRIVER,
  FETCH_DRIVER_STATUSES,
} from './driversTypes';

interface IAction<T> {
  type: string;
  payload?: T;
}

export const fetchDrivers = <T>(data: T): IAction<T> => ({
  type: FETCH_DRIVERS,
  payload: data,
});

export const createDriver = <T>(data: T): IAction<T> => ({
  type: CREATE_DRIVER,
  payload: data,
});

export const deleteDriver = <T>(data: T): IAction<T>  => ({
  type: DELETE_DRIVER,
  payload: data,
});

export const updateDriver = <T>(data: T): IAction<T> => ({
  type: UPDATE_DRIVER,
  payload: data,
});

export const fetchStatusesDriver = <T>(data: T): IAction<T> => ({
  type: FETCH_DRIVER_STATUSES,
  payload: data,
});
