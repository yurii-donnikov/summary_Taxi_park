import { useEffect } from 'react';
import styles from '../CarList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../../redux/cars/carsSelectors';
import { getDrivers } from '../../../redux/drivers/driversSelectors';
import {
  fetchCarsRequest,
  fetchCarsByIdDriverRequest,
} from '../../../redux/cars/carsActions';
import { fetchDriversRequest } from '../../../redux/drivers/driversActions';
import CarsTable from './CarsTable';
import { useParams } from 'react-router-dom';


const CarItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let cars = useSelector(getCars);
  
 

  useEffect(() => {
    if (id) {
      dispatch(fetchCarsByIdDriverRequest(Number(id)));
    }else {
      dispatch(fetchCarsRequest());
    }
    
  }, [dispatch, id]);

  const drivers = useSelector(getDrivers);

  useEffect(() => {
    dispatch(fetchDriversRequest());
  }, [dispatch]);
  return (
    <>
      {cars.map(car => (
        <li key={car.id} className={styles.data_list}>
          {drivers
            .filter(driver => driver.id === car.driver_id)
            .map(driver => (
              <CarsTable
                driverName={driver.first_name}
                driverId={driver.id}
                carId={car.id}
                driverLastName={driver.last_name}
                driverStatus={driver.status.title}
                carModel={car.model}
                carMark={car.mark}
                carYear={car.year}
                carNumber={car.number}
                carStatus={car.status.title}
                key={driver.id}
              />
            ))}
        </li>
      ))}
    </>
  );
};

export default CarItem;
