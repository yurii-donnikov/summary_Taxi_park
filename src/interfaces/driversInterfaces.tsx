export interface IDriverStatus {
  title: string;
  code: string;
}

export interface IDriver {
  id: number;
  first_name: string;
  last_name: string;
  date_created: number;
  date_birth: number;
  status: IDriverStatus;
}

export interface IDriverState {
  drivers: {
    drivers: IDriver[];
    statuses: IDriverStatus[];
  };
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IDriversState {
  drivers: IDriver[];
  statuses: IDriverStatus[];
}

export interface IActionUpdateDriver {
  id: number;
  newDriver: IUpdatedDriver;
}

export interface IUpdatedDriver {
  id: number;
  first_name: string;
  last_name: string;
  status: string;
}

export interface IFormDriver {
  first_name: string;
  last_name: string;
  date_birth: string;
  status: string;
}
