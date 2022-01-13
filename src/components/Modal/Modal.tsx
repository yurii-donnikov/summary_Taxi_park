import React, { useState } from 'react';
import styles from './Modal.module.scss';
import drivers from '../driverBase/DriverBase';
import FormDriver from '../Form/FormDrivers';
import FormCar from '../Form/FormCars';

const Modal = ({
  children,
  active,
  setActive,
}: {
  children: React.ReactNode;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  return (
    <div
      className={styles[active ? 'modal__active' : 'modal']}
      onClick={() => setActive(false)}
    >
      <div
        className={styles.modal__content}
        onClick={event => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
