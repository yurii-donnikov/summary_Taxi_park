export interface IStatusCar {
    title: string;
    code: string;
  }

export interface ICar{
      id: number,
      model: string,
      mark: string,
      year: number,
      number: string,
      driver_id: number,
      status: IStatusCar,
  
}

export interface IAction{
  type: string,
  payload: number,
}
export interface PropsCars{
  carId: number,
  driverStatus: string,
  driverId: number,
  driverName: string,
  driverLastName: string,
  carModel: string,
  carMark: string,
  carYear: number,
  carNumber: string,
  carStatus: string,
}
