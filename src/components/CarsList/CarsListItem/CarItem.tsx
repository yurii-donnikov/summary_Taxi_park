import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../CarList.module.scss';
import { useParams } from 'react-router-dom';
import { getCars } from '../../../redux/cars/carsSelectors';
import { getDrivers } from '../../../redux/drivers/driversSelectors';
import {
  fetchCarsRequest,
  fetchCarsByIdDriverRequest,
  deleteCarRequest,
} from '../../../redux/cars/carsActions';
import { fetchDriversRequest } from '../../../redux/drivers/driversActions';
import sprite from '../../../assets/icons/symbol-defs.svg';

const CarItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let cars = useSelector(getCars);

  const handlerDeleteBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const carId = Number(event.currentTarget.id);
    dispatch(deleteCarRequest(carId));
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchCarsByIdDriverRequest(Number(id)));
    } else {
      dispatch(fetchCarsRequest());
    }
  }, [dispatch, id]);

  const drivers = useSelector(getDrivers);

  useEffect(() => {
    dispatch(fetchDriversRequest());
  }, [dispatch]);
  return (
    <>
      {cars.map(car =>
        drivers
          .filter(driver => driver.id === car.driver_id)
          .map(driver => (
            <li key={car.id} className={styles.data_list}>
              <p>{car.id}</p>
              <p title={driver.status.title} key={driver.id}>
                {driver.first_name + ' ' + driver.last_name}
              </p>
              <p>{car.model}</p>
              <p>{car.mark}</p>
              <p>{car.year}</p>
              <p>{car.number}</p>
              <p>{car.status.title}</p>
              <button id={car.id.toString()} onClick={handlerDeleteBtn}>
                <svg className={styles.icon}>
                  {' '}
                  <use href={sprite + '#icon-TypeDendie'} />{' '}
                </svg>
              </button>
            </li>
          )),
      )}
    </>
  );
};

export default CarItem;
