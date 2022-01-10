interface IStatus {
  title: string;
  code: string;
}

interface IDriver {
  id: number;
  first_name: string;
  last_name: string;
  date_birth: number;
  status: IStatus;
}

interface IState {
  drivers: {
    drivers: IDriver[];
    statuses: IStatus[];
  };
}

export const getDrivers = (state: IState): IDriver[] =>
  state.drivers.drivers;

export const getDriverStatuses = (state: IState): IStatus[] =>
  state.drivers.statuses;
