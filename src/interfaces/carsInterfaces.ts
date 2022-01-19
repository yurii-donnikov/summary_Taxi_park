export interface IStatusCar {
  title: string;
  code: string;
}

export interface ICar {
  id: number;
  model: string;
  mark: string;
  year: number;
  number: string;
  driver_id: number;
  status: IStatusCar;
}

export interface IAction {
  type: string;
  payload: any;
}
export interface PropsCars {
  carId: number;
  driverStatus: string;
  driverId: number;
  driverName: string;
  driverLastName: string;
  carModel: string;
  carMark: string;
  carYear: number;
  carNumber: string;
  carStatus: string;
}

export interface IFormCar {
  driver_id: number;
  mark: string;
  model: string;
  year: number;
  number: string;
  status: string;
}

export interface ICarsState {
  cars: ICar[];
  statuses: IStatusCar[];
}

export interface IParams<T> {
  type: string;
  payload: T;
}

export interface ICarState {
  cars: {
    cars: ICar[];
    statuses: IStatusCar[];
  };
}
