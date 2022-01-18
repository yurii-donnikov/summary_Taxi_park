import { ICar, IStatusCar } from '../../interfaces/carsInterfaces';
interface IState {
  cars: {
    cars: ICar[];
    statuses: IStatusCar[];
  };
}

export const getCars = (state: IState): ICar[] => state.cars.cars;

export const getCarsStatuses = (state: IState): IStatusCar[] =>
  state.cars.statuses;
