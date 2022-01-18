import React from 'react';
import cars from '../../carBase/CarBase';
import { useEffect, useState } from 'react';
import styles from '../CarList.module.scss';
import sprite from '../../../icons/symbol-defs.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../../redux/cars/carsSelectors';
import { getDrivers } from '../../../redux/drivers/driversSelectors';
import {
  fetchCarsRequest,
  deleteCarRequest,
} from '../../../redux/cars/carsActions';
import { fetchDriversRequest } from '../../../redux/drivers/driversActions';
import CarsTable from './CarsTable';
import { useParams } from 'react-router-dom';

const CarItem = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
const id = useParams();
  useEffect(() => {
    dispatch(fetchCarsRequest());
  }, [dispatch]);

  const drivers = useSelector(getDrivers);

  useEffect(() => {
    dispatch(fetchDriversRequest());
  }, [dispatch]);

  const handlerDeleteBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const carId = Number(event.currentTarget.id);
    dispatch(deleteCarRequest(carId));
  };
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
              />
            ))}
        </li>
      ))}
    </>
  );
};

export default CarItem;
