import { ICar } from './../carBase/CarBase';
import axios from "axios";
import { IStatusCar } from "../../interfaces/carsInterfaces";


axios.defaults.baseURL = 'https://edu.evgeniychvertkov.com/v1';

axios.defaults.headers.common['X-Authorization'] =
  'apie05b4a902436848782d6f233ae1715330c0f4d52e4efa41e315378e5256bf7d3';


  export async function fetchCars() {
    const response = await axios.get('/car/');
    const { data } = response.data;
    
    return data;
  }
 export async function fetchCarsByIdDriver(id: number){
  const response = await axios.get(`/car/`, {
    headers: {
      'E-Driver-Id': String(id)
    }
  });
  const {data} = response.data;
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
  
