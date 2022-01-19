import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import { LanguageBlock } from './LanguageBlock/LanguageBlock';
import { Path } from '../../constants/path';

function Header() {
  const { t } = useTranslation();
  return (
    <>
      <header>
        <div className={styles.container}>
          <NavLink to={Path.HOME}>
            <img src={Path.IMAGE_LOGO} title={t('title_logo')} alt={t('alt_logo')} />
          </NavLink>
          <nav className={styles.menu}>
            <ul>
              <li>
                <NavLink to={Path.DRIVERS}>{t('header_driver')}</NavLink>
              </li>
              <li>
                <NavLink to={Path.CARS}>{t('header_car')}</NavLink>
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
