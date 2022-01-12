import React, { MouseEvent, useState } from 'react';
import drivers from '../../driverBase/DriverBase';
import styles from '../DriverList.module.scss';
import sprite from '../../../icons/symbol-defs.svg';
import Modal from '../../Modal/Modal';
import FormDriver from '../../Form/FormDrivers';
import FormCar from '../../Form/FormCars';


const DriverItem = () => {
  const [modalActive, setModalActive] = useState(false);
  const [formType, setFormType] = useState(false);
  const [type, setType] = useState(false);

  const renderModalDriver = () =>{
    setModalActive(true);
    setFormType(false);
    setType(true);
  }
  
  const renderModalCar = () => {
    setModalActive(true);
    setFormType(true);
  };

  return (
    <>
      {drivers.map(driver => (
        <li key={driver.id} className={styles.data_list}>
          <p>
            {driver.id}
          </p>
          <p>
            {driver.first_name+' '}
            {driver.last_name}
          </p>
          <p>
            {driver.date_birth}
          </p>
          <p>
            {driver.date_created}
          </p>
          <p>
            {driver.status.title}
          </p>

          <div>
            <button className={styles.ico__btn} onClick={renderModalDriver} >
              <svg className={styles.icon} >
                <use href={sprite + '#icon-TypeEdit'} />
              </svg>
            </button>

            <button className={styles.ico__btn}>
              <svg className={styles.icon}>
                <use href={sprite + '#icon-TypeWatch'} />
              </svg>
            </button>

            <button className={styles.ico__btn}>
              <svg className={styles.icon}>
                <use href={sprite + '#icon-TypeDendie'} />
              </svg>
            </button>
          </div>

          <button data-value={'car'} className={styles.car__btn}
            onClick={renderModalCar}>
            <svg className={styles.icon__create}>
                <use href={sprite + "#icon-TypeAdd"}/>
            </svg>
            <p>Авто</p>
          </button>
        </li>
      ))}
      <Modal active={modalActive} setActive={setModalActive}>
            {formType ? (<FormCar/>) : (<FormDriver active={type} />)}
      </Modal>
    </>
  );
};

export default DriverItem;
