import React from 'react';
import { useParams } from 'react-router-dom';
import CarList from '../../components/CarsList/CarList';
import { useTranslation } from 'react-i18next';
import sprite from '../../icons/symbol-defs.svg';
import Breadcrambs from '../../components/Breadcrambs/Breadcrambs';
import styles from '../../components/Header/Header.module.scss';

function Cars(): JSX.Element {
    const idDriver = useParams();
    const { t } = useTranslation();
    return (
        <>
        <Breadcrambs category={t('breadcrembs_car')} icon={<svg className={styles.icon}>
                <use href={sprite + '#icon-car-solid'} />
              </svg>}/>
        <CarList {...idDriver}/>
        </>
        
    );
}
export default Cars;