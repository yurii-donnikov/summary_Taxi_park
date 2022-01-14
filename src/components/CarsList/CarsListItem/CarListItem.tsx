import React from 'react';
import cars from '../../carBase/CarBase';
import { useEffect, useState } from 'react';
import styles from '../CarList.module.scss';
import sprite from '../../../icons/symbol-defs.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../../redux/cars/carsSelectors';
import { getDrivers } from '../../../redux/drivers/driversSelectors';
import { fetchCarsRequest, deleteCarRequest } from '../../../redux/cars/carsActions';
import { fetchDriversRequest } from '../../../redux/drivers/driversActions';

const CarItem = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);

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
          <p>{car.id}</p>

          {drivers
            .filter(driver => driver.id === car.driver_id)
            .map(driver => (
              <p title={driver.status.title} key={driver.id}>
                {driver.first_name + ' ' + driver.last_name}
              </p>
            ))}

          <p>{car.model}</p>

          <p>{car.mark}</p>

          <p>{car.year}</p>

          <p>{car.number}</p>

          <p>{car.status.title}</p>

          <button id={car.id.toString()}
              onClick={handlerDeleteBtn}>
            <svg className={styles.icon}>
              <use href={sprite + '#icon-TypeDendie'} />
            </svg>
          </button>

          <p></p>
        </li>
      ))}
    </>
  );
};

export default CarItem;
