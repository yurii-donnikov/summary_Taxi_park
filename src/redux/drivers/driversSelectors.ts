import {
  IDriver,
  IDriverStatus,
  IDriverState,
} from '../../interfaces/driversInterfaces';

export const getDrivers = (state: IDriverState): IDriver[] =>
  state.drivers.drivers;

export const getDriverStatuses = (state: IDriverState): IDriverStatus[] =>
  state.drivers.statuses;
