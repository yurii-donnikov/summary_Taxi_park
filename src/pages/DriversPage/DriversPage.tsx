import React from 'react';
import Breadcrambs from '../../components/Breadcrambs/Breadcrambs';
import DriverList from '../../components/DriverList/DriverList';
import { useTranslation } from 'react-i18next';
import sprite from '../../icons/symbol-defs.svg';
import styles from '../../components/Header/Header.module.scss';

function Drivers(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Breadcrambs category={t('breadcrembs_drivers')} icon={<svg className={styles.icon}>
                <use href={sprite + '#icon-TypeUsers'} />
              </svg>}/>
      <DriverList/>
    </>
  );
}
export default Drivers;
