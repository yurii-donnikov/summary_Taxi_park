import React, { useState } from 'react';
import CarItem from './CarsListItem/CarListItem';
import styles from './CarList.module.scss';
import Modal from '../Modal/Modal';
import sprite from '../../icons/symbol-defs.svg';
import { useTranslation } from 'react-i18next';

const CarList = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.list__contsiner}>
      <ul className={styles.list__header}>
        <li>ID</li>
        <li>{t('driver_name')}</li>
        <li>{t('car_brand')}</li>
        <li>{t('car_model')}</li>
        <li>{t('car_year')}</li>
        <li>{t('car_number')}</li>
        <li>{t('driver_status')}</li>
        <li>{t('driver_actions')}</li>
      </ul>
      <ul>
        <CarItem />
      </ul>
    </div>
  );
};

export default CarList;
