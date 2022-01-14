import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.scss';
import { faHome, faAngleRight, faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sprite from '../../icons/symbol-defs.svg';
import { useTranslation } from 'react-i18next';

let angleRight = '>';
function BreadcrambsCars() {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.breadcrambs}>
          <ul>
            <li>
              <svg className={styles.icon}>
                <use href={sprite + '#icon-TypeHome'} />
              </svg>
              <NavLink to="/">
                {t('breadcrembs_main')} {angleRight}
              </NavLink>
            </li>
            <li className={styles.current}>
              <svg className={styles.icon}>
                <use href={sprite + '#icon-car-solid'} />
              </svg>
              <NavLink to="" className={styles.current}>
                {t('breadcrembs_car')}
              </NavLink>
            </li>
          </ul>
          <img src="./anle-double-right-solid.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default BreadcrambsCars;
