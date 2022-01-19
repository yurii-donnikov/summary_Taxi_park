import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.scss';
import sprite from '../../icons/symbol-defs.svg';
import { useTranslation } from 'react-i18next';
interface PropsBreadcrambs{
category: string,
icon: React.SVGAttributes<SVGUseElement>,
}
let angleRight = '>';
function BreadcrambsCars(props: PropsBreadcrambs) {
  const { t } = useTranslation();
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
              {props.icon}
              <NavLink to="" className={styles.current}>
                {props.category}
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
