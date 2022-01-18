import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import { LanguageBlock } from './LanguageBlock/LanguageBlock';

function Header() {
  const { t, i18n } = useTranslation();
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
                <NavLink to="/drivers">{t('header_driver')}</NavLink>
              </li>
              <li>
                <NavLink to="/cars">{t('header_car')}</NavLink>
              </li>
            </ul>
          </nav>
          <LanguageBlock />
        </div>
      </header>
    </>
  );
}

export default Header;
