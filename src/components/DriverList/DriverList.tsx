import React, {useState} from "react";
import DriverItem from "./DriverListItem/DriverListItem";
import Modal from "../modal/Modal";
import styles from "./DriverList.module.scss";
import sprite from "../../icons/symbol-defs.svg";

const DriverList = () => {

    const [modalActive, setModalActive] = useState(false);

    const renderModalCar = () => {
        setModalActive(true);
    };
    return (
        <div className={styles.list__contsiner}>
            <ul className={styles.list__header}>
                <li>ID</li>
                <li>ФИО</li>
                <li>Дата рождения</li>
                <li>Регистрация</li>
                <li>Статус</li>
                <li>Действия</li>
                <li>
                    <button className={styles.open__btn} onClick={() => renderModalCar()}>
                        <svg className={styles.icon__create}>
                            <use href={sprite + "#icon-TypeAdd"}/>
                        </svg>
                        <p>Водитель</p>
                    </button>
                </li>
            </ul>
            <ul>
                <DriverItem/>
           </ul>
           <Modal active={modalActive} setActive={setModalActive}/> 
        </div>

    )
}


export default DriverList;