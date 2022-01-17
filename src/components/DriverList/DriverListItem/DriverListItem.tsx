import { useEffect, useState } from 'react';
import styles from '../DriverList.module.scss';
import sprite from '../../../icons/symbol-defs.svg';
import Modal from '../../Modal/Modal';
import FormDriver from '../../Form/FormDrivers';
import FormCar from '../../Form/FormCars';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteDriverRequest,
  fetchDriversRequest,
  fetchDriverStatusesRequest,
  updateDriverRequest,
} from '../../../redux/drivers/driversActions';
import { getDrivers } from '../../../redux/drivers/driversSelectors';
import { useTranslation } from 'react-i18next';
import FormUpdateDriver from '../../Form/FormUpdateDriver';

const DriverItem = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const drivers = useSelector(getDrivers);

  const [currentDriver, setCurrentDriver] = useState({});

  useEffect(() => {
    dispatch(fetchDriversRequest());
    dispatch(fetchDriverStatusesRequest());
    
  }, [dispatch]);

  const [modalActive, setModalActive] = useState(false);
  const [formType, setFormType] = useState(false);


  const modifyDriver = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const currentDriverId = Number(event.currentTarget.id);
    const curDriver = drivers.filter(driver => driver.id === currentDriverId);

    setCurrentDriver(curDriver[0]);

    // dispatch(updateDriverRequest(curDriver[0]));
    
    setModalActive(true);
    setFormType(false);
    
    // dispatch(fetchDriversRequest());
  };

  const renderModalCar = () => {
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
              <svg className={styles.icon}>
                <use href={sprite + '#icon-TypeWatch'} />
              </svg>
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
            data-value={'car'}
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
          <FormCar setActive={setModalActive} />
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
