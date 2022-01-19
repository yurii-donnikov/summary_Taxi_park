import axios from 'axios';
import { apiConfig } from './apiConfig';
import {
  IDriver,
  IDriverStatus,
  IUpdatedDriver,
} from '../../interfaces/driversInterfaces';

axios.defaults.baseURL = apiConfig.baseUrl;

axios.defaults.headers.common[apiConfig.apiKeyHeader] = apiConfig.apiKey;

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

export async function updateDriver(
  id: number,
  newDriver: IUpdatedDriver,
): Promise<IUpdatedDriver> {
  const response = await axios.patch(`/driver/${id}/`, newDriver);
  const { data } = response.data;

  return data;
}
