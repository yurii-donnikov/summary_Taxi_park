import React from 'react';
import styles from '../CarList.module.scss';
import sprite from '../../../icons/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { deleteCarRequest } from '../../../redux/cars/carsActions';
import { PropsCars } from '../../../interfaces/carsInterfaces';

const CarsTable = (props: PropsCars) => {
  const dispatch = useDispatch();
  const handlerDeleteBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const carId = Number(event.currentTarget.id);
    dispatch(deleteCarRequest(carId));
  };
  return (
    <>
      <p>{props.carId}</p>
      <p title={props.driverStatus} key={props.driverId}>
        {props.driverName + ' ' + props.driverLastName}
      </p>
      <p>{props.carModel}</p>
      <p>{props.carMark}</p>
      <p>{props.carYear}</p>
      <p>{props.carNumber}</p>
      <p>{props.carStatus}</p>
      <button id={props.carId.toString()} onClick={handlerDeleteBtn}>
        <svg className={styles.icon}>
          <use href={sprite + '#icon-TypeDendie'} />
        </svg>
      </button>
    </>
  );
};

export default CarsTable;
