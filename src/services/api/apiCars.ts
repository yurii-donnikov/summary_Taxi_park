import axios from 'axios';
import { apiConfig } from './apiConfig';
import { ICar } from '../../interfaces/carsInterfaces';
import { IStatusCar } from '../../interfaces/carsInterfaces';

axios.defaults.baseURL = apiConfig.baseUrl;

axios.defaults.headers.common[apiConfig.apiKeyHeader] = apiConfig.apiKey;

export async function fetchCars() {
  const response = await axios.get('/car/');
  const { data } = response.data;

  return data;
}
export async function fetchCarsByIdDriver(id: number) {
  const response = await axios.get(`/car/`, {
    headers: {
      [apiConfig.driverCars]: String(id),
    },
  });
  const { data } = response.data;
  return data;
}
export async function deleteCar(id: number): Promise<void> {
  await axios.delete(`/car/${id}/`);
}

export async function fetchCarsStatuses(): Promise<IStatusCar[]> {
  const response = await axios.get(`/car-status/`);
  const { data }: { data: IStatusCar[] } = response.data;

  return data;
}

export async function createCar(car: Partial<ICar>): Promise<ICar> {
  const response = await axios.post(`/car/`, car);
  const { data }: { data: ICar } = response.data;

  return data;
}
