import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.scss';
import {
  faHome,
  faAngleRight,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sprite from '../../icons/symbol-defs.svg';
let angleRight = '>';
function BreadcrambsDrivers() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.breadcrambs}>
          <ul>
            <li>
              <svg className={styles.icon}>
                <use href={sprite + '#icon-TypeHome'} />
              </svg>
              <NavLink to="/">Главная {angleRight}</NavLink>
            </li>

            <li className={styles.current}>
              <svg className={styles.icon}>
                <use href={sprite + '#icon-TypeUsers'} />
              </svg>
              <NavLink to="" className={styles.current}>
                Водители
              </NavLink>
            </li>
          </ul>
          <img src="./anle-double-right-solid.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default BreadcrambsDrivers;
