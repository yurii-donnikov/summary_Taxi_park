import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from '../DriverList.module.scss';
import sprite from '../../../assets/icons/symbol-defs.svg';
import Modal from '../../Modal/Modal';
import FormCar from '../../Form/FormCars';
import {
  deleteDriverRequest,
  fetchDriversRequest,
  fetchDriverStatusesRequest,
} from '../../../redux/drivers/driversActions';
import { getDrivers } from '../../../redux/drivers/driversSelectors';
import FormUpdateDriver from '../../Form/FormUpdateDriver';
import { fetchCarStatusesRequest } from '../../../redux/cars/carsActions';

const DriverItem = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const drivers = useSelector(getDrivers);

  const [currentDriver, setCurrentDriver] = useState({
    id: 0,
    first_name: '',
    last_name: '',
    status: {
      title: '',
      code: '',
    },
  });

  useEffect(() => {
    dispatch(fetchDriversRequest());
    dispatch(fetchDriverStatusesRequest());
  }, [dispatch]);

  const [modalActive, setModalActive] = useState(false);
  const [formType, setFormType] = useState(false);
  const [currentDriverId, setCurrentDriverId] = useState(0);

  const modifyDriver = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const currentDriverId = Number(event.currentTarget.id);
    const curDriver = drivers.filter(driver => driver.id === currentDriverId);

    setCurrentDriver(curDriver[0]);

    setModalActive(true);
    setFormType(false);
  };

  const renderModalCar = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const currentDriverId = Number(event.currentTarget.id);

    dispatch(fetchCarStatusesRequest());

    setCurrentDriverId(currentDriverId);

    setModalActive(true);
    setFormType(true);
  };

  const handlerDeleteBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const driverId = Number(event.currentTarget.id);

    dispatch(deleteDriverRequest(driverId));
  };

  return (
    <>
      {drivers.map(driver => (
        <li key={driver.id} className={styles.data_list}>
          <p>{driver.id}</p>
          <p>
            {driver.first_name + ' '}
            {driver.last_name}
          </p>
          <p>{new Date(driver.date_birth).toLocaleDateString()}</p>
          <p>{new Date(driver.date_created).toLocaleDateString()}</p>
          <p>{driver.status.title}</p>

          <div>
            <button
              id={driver.id.toString()}
              className={styles.ico__btn}
              onClick={modifyDriver}
            >
              <svg className={styles.icon}>
                <use href={sprite + '#icon-TypeEdit'} />
              </svg>
            </button>

            <button className={styles.ico__btn}>
              <Link to={`/cars/${driver.id}`}>
                <svg className={styles.icon}>
                  <use href={sprite + '#icon-TypeWatch'} />
                </svg>
              </Link>
            </button>

            <button
              id={driver.id.toString()}
              onClick={handlerDeleteBtn}
              className={styles.ico__btn}
            >
              <svg className={styles.icon}>
                <use href={sprite + '#icon-TypeDendie'} />
              </svg>
            </button>
          </div>

          <button
            id={driver.id.toString()}
            className={styles.car__btn}
            onClick={renderModalCar}
          >
            <svg className={styles.icon__create}>
              <use href={sprite + '#icon-TypeAdd'} />
            </svg>
            <p>{t('button_add_car')}</p>
          </button>
        </li>
      ))}
      <Modal active={modalActive} setActive={setModalActive}>
        {formType ? (
          <FormCar
            setActive={setModalActive}
            currentDriverId={currentDriverId}
          />
        ) : (
          <FormUpdateDriver
            setActive={setModalActive}
            currentDriver={currentDriver}
          />
        )}
      </Modal>
    </>
  );
};

export default DriverItem;
