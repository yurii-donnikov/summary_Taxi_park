import React, {useState} from "react";
import CarItem from "./CarsListItem/CarListItem";
import styles from "./CarList.module.scss";
import Modal from "../Modal/Modal";
import sprite from "../../icons/symbol-defs.svg";

const CarList = () => {
    return (
        <div className={styles.list__contsiner}>
            <ul className={styles.list__header}>
                <li>ID</li>
                <li>ФИО</li>
                <li>Марка</li>
                <li>Модель</li>
                <li>Год</li>
                <li>Номер</li>
                <li>Статус</li>
                <li>Действия</li>
                <li></li>
            </ul>
            <ul>
                <CarItem/>
           </ul>
        </div>

    )
}

export default CarList;