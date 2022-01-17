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

export interface IAction {
  type: string;
  payload: number | any;
}

export interface IDriversState {
  drivers: IDriver[];
  statuses: IDriverStatus[];
}


export interface IUpdateDriver {
  id: number;
  newDriver: updateCurDriver;
}

// ====
export interface updateCurDriver {
  id: number;
  first_name: string;
  last_name: string;
 
}