import { useState } from 'react';
import DriverItem from './DriverListItem/DriverListItem';
import Modal from '../Modal/Modal';
import styles from './DriverList.module.scss';
import sprite from '../../icons/symbol-defs.svg';
import FormDriver from '../Form/FormDrivers';
import { useTranslation } from 'react-i18next';

const DriverList = () => {
  const { t } = useTranslation();
  const [modalActive, setModalActive] = useState(false);
  const [formType, setFormType] = useState(false);

  const renderModalDriver = () => {
    setModalActive(true);
    setFormType(false);
  };

  return (
    <div className={styles.list__contsiner}>
      <ul className={styles.list__header}>
        <li>ID</li>
        <li>{t('driver_name')}</li>
        <li>{t('driver_birth')}</li>
        <li>{t('driver_registration')}</li>
        <li>{t('driver_status')}</li>
        <li>{t('driver_actions')}</li>
        <li>
          <button className={styles.open__btn} onClick={renderModalDriver}>
            <svg className={styles.icon__create}>
              <use href={sprite + '#icon-TypeAdd'} />
            </svg>
            <p>{t('button_add_driver')}</p>
          </button>
        </li>
      </ul>
      <ul>
        <DriverItem />
      </ul>
      <Modal active={modalActive} setActive={setModalActive}>
        {<FormDriver setActive={setModalActive} />}
      </Modal>
    </div>
  );
};

export default DriverList;
