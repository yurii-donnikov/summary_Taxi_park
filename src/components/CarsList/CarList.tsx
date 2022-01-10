import React, {useState} from "react";
import CarItem from "./CarsListItem/CarListItem";
import styles from "./CarList.module.scss";
import Modal from "../modal/Modal";
import sprite from "../../icons/symbol-defs.svg";

const CarList = () => {

    const [modalActive, setModalActive] = useState(false);

    const renderModalCar = () => {
        setModalActive(true);
    };
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
                <li><button className={styles.open__btn}
                onClick={() => renderModalCar()}>
                    <svg className={styles.icon__create}>
                        <use href={sprite + "#icon-TypeAdd"}/>
                    </svg>
                    <p>Авто</p>
                    </button>
                </li>
            </ul>
            <ul>
                <CarItem/>
           </ul>
           <Modal active={modalActive} setActive={setModalActive}/> 
        </div>

    )
}

export default CarList;