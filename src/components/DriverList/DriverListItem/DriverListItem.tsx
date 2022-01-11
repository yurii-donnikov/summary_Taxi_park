import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../DriverList.module.scss';
import sprite from '../../../icons/symbol-defs.svg';
import Modal from '../../Modal/Modal';
import { getDrivers } from '../../../redux/drivers/driversSelectors';
import { fetchDriversRequest } from '../../../redux/drivers/driversActions';

const DriverItem = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchDriversRequest());
  },[dispatch]);
  
  const drivers = useSelector(getDrivers);
  
  const [modalActive, setModalActive] = useState(false);

  const renderModalCar = () => {
    setModalActive(true);
  };

  return (
    <>
      {drivers.map(driver => (
        <li key={driver.id} className={styles.data_list}>
          <p>
            <strong>{driver.id}</strong>
          </p>
          <p><strong>{driver.first_name}</strong></p>
          <p>
            <strong>{driver.date_birth}</strong>
          </p>
          <p><strong>{driver.date_created}</strong></p>

          <select name="status">
            <option>{driver.status.title}</option>
            <option value="active">Активен</option>
            <option value="inactive">Неактивен</option>
            <option value="blocked">Заблокирован</option>
          </select>

          <div>
            <button onClick={() => renderModalCar()}>
              <svg className={styles.icon}>
                <use href={sprite + '#icon-TypeEdit'} />
              </svg>
            </button>

            <button>
              <svg className={styles.icon}>
                <use href={sprite + '#icon-TypeWatch'} />
              </svg>
            </button>

            <button>
              <svg className={styles.icon}>
                <use href={sprite + '#icon-TypeDendie'} />
              </svg>
            </button>
          </div>

          <p></p>
        </li>
      ))}
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default DriverItem;
