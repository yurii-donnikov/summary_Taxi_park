import { ICar, IStatusCar, ICarState } from '../../interfaces/carsInterfaces';

export const getCars = (state: ICarState): ICar[] => state.cars.cars;

export const getCarsStatuses = (state: ICarState): IStatusCar[] =>
  state.cars.statuses;
