import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from '../Header/Header.module.scss';
import sprite from '../../assets/icons/symbol-defs.svg';
import { Path } from '../../constants/path';
interface PropsBreadcrambs {
  category: string;
  icon: React.SVGAttributes<SVGUseElement>;
}

let angleRight = '>';

function Breadcrambs(props: PropsBreadcrambs) {
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
              <NavLink to={Path.HOME}>
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
        </div>
      </div>
    </div>
  );
}

export default Breadcrambs;
