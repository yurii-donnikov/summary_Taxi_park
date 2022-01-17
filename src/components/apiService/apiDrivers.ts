import axios from 'axios';
import { IDriver, IDriverStatus } from '../../interfaces/driversInterfaces';

axios.defaults.baseURL = 'https://edu.evgeniychvertkov.com/v1';
axios.defaults.headers.common['X-Authorization'] =
  'apie05b4a902436848782d6f233ae1715330c0f4d52e4efa41e315378e5256bf7d3';

export async function fetchDrivers(): Promise<IDriver[]> {
  const response = await axios.get('/driver/');
  const { data }: { data: IDriver[] } = response.data;

  return data;
}

export async function createDriver(driver: IDriver): Promise<IDriver> {
  const response = await axios.post(`/driver/`, driver);
  const { data }: { data: IDriver } = response.data;

  return data;
}

export async function fetchDriverStatuses(): Promise<IDriverStatus[]> {
  const response = await axios.get(`/driver-status/`);
  const { data }: { data: IDriverStatus[] } = response.data;

  return data;
}

export async function deleteDriver(id: number): Promise<void> {
  await axios.delete(`/driver/${id}/`);
}


interface updateCurDriver {
  id: number;
  first_name: string;
  last_name: string;
  // status: {
  //   title: string;
  //   code: string;
  // };
}

export async function updateDriver(
  id: number,
  newDriver: updateCurDriver,
): Promise<updateCurDriver> {
  const response = await axios.patch(`/driver/${id}/`, newDriver);
  const { data } = response.data;

  return data;
}
