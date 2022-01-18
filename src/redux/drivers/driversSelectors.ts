import { IDriverState } from './../../interfaces/driversInterfaces';
import { IDriver, IDriverStatus } from '../../interfaces/driversInterfaces';

export const getDrivers = (state: IDriverState): IDriver[] =>
  state.drivers.drivers;

export const getDriverStatuses = (state: IDriverState): IDriverStatus[] =>
  state.drivers.statuses;

