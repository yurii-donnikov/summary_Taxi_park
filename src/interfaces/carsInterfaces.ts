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

