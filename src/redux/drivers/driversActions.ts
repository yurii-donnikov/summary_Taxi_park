import * as type from './driversTypes';
interface IAction<P> {
  type: string;
  payload?: P;
}

export const fetchDriversRequest = <P>(): IAction<P> => ({
  type: type.FETCH_DRIVERS_REQUEST,
});

export const fetchDriversSuccess = <P>(data: P): IAction<P> => ({
  type: type.FETCH_DRIVERS_SUCCESS,
  payload: data,
});

export const fetchDriversError = <P>(data: P): IAction<P> => ({
  type: type.FETCH_DRIVERS_SUCCESS,
  payload: data,
});

export const fetchDriverStatusesRequest = <P>(): IAction<P> => ({
  type: type.FETCH_DRIVER_STATUSES_REQUEST,
});

export const fetchDriverStatusesSuccess = <P>(data: P): IAction<P> => ({
  type: type.FETCH_DRIVER_STATUSES_SUCCESS,
  payload: data,
});

export const fetchDriverStatusesError = <P>(data: P): IAction<P> => ({
  type: type.FETCH_DRIVER_STATUSES_ERROR,
  payload: data,
});

export const createDriverRequest = <P>(data: P): IAction<P> => ({
  type: type.CREATE_DRIVER_REQUEST,
  payload: data,
});

export const createDriverSuccess = <P>(data: P): IAction<P> => ({
  type: type.CREATE_DRIVER_SUCCESS,
  payload: data,
});

export const createDriverError = <P>(data: P): IAction<P> => ({
  type: type.CREATE_DRIVER_ERROR,
  payload: data,
});

export const deleteDriverRequest = <P>(data: P): IAction<P> => ({
  type: type.DELETE_DRIVER_REQUEST,
  payload: data,
});

export const deleteDriverSuccess = <P>(data: P): IAction<P> => ({
  type: type.DELETE_DRIVER_SUCCESS,
  payload: data,
});

export const deleteDriverError = <P>(data: P): IAction<P> => ({
  type: type.DELETE_DRIVER_ERROR,
  payload: data,
});

export const updateDriverRequest = <P>(data: P): IAction<P> => ({
  type: type.UPDATE_DRIVER_REQUEST,
  payload: data,
});

export const updateDriverSuccess = <P>(data: P): IAction<P> => ({
  type: type.UPDATE_DRIVER_SUCCESS,
  payload: data,
});

export const updateDriverError = <P>(data: P): IAction<P> => ({
  type: type.UPDATE_DRIVER_ERROR,
  payload: data,
});
