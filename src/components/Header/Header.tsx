import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <>
      <header>
        <div className={styles.container}>
          <NavLink to="/">
            <img src="./logo-taxi.svg" title="Taxi park" alt="Taxi park logo" />
          </NavLink>
          <nav className={styles.menu}>
            <ul role="list">
              <li>
                <NavLink to="/drivers">Водители</NavLink>
              </li>
              <li>
                <NavLink to="/cars">Автомобили</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
