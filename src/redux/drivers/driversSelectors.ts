import { IDriver, IDriverStatus } from '../../interfaces/driversInterfaces';
interface IState {
  drivers: {
    drivers: IDriver[];
    statuses: IDriverStatus[];
  };
}

export const getDrivers = (state: IState): IDriver[] => state.drivers.drivers;

export const getDriverStatuses = (state: IState): IDriverStatus[] =>
  state.drivers.statuses;
