import axios from "axios";
axios.defaults.baseURL = 'https://edu.evgeniychvertkov.com/v1';
axios.defaults.headers.common['X-Authorization'] =
  'apie05b4a902436848782d6f233ae1715330c0f4d52e4efa41e315378e5256bf7d3';

  export async function fetchCars() {
    const response = await axios.get('/car/');
    const { data } = response.data;
    return data;
  }
 
  export async function deleteCar(id: number): Promise<void> {
      await axios.delete(`/car/${id}/`);
  }
