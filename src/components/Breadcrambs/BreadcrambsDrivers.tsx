import React from 'react';
import { NavLink } from 'react-router-dom';
import stales from '../Header/Header.module.scss';
import {
  faHome,
  faAngleRight,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BreadcrambsDrivers() {
  return (
    <div className={stales.section}>
      <div className={stales.container}>
        <div className={stales.breadcrambs}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHome} />
              <NavLink to="/">Главная</NavLink>
            </li>
            <FontAwesomeIcon icon={faAngleRight} />
            <li className={stales.current}>
              <FontAwesomeIcon icon={faUser} />
              <NavLink to="" className={stales.current}>
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
