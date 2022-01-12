import React, {useState} from "react";
import DriverItem from "./DriverListItem/DriverListItem";
import Modal from "../Modal/Modal";
import styles from "./DriverList.module.scss";
import sprite from "../../icons/symbol-defs.svg";
import FormCar from "../Form/FormCars";
import FormDriver from "../Form/FormDrivers";


const DriverList = () => {

    const [modalActive, setModalActive] = useState(false);
    const [formType, setFormType] = useState(false);
    const [type, setType] = useState(false);
  
    const renderModalCar = () => {
      setModalActive(true);
      setFormType(true);
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
                    <button data-action={'driver'} className={styles.open__btn} onClick={renderModalCar}>
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
           <Modal active={modalActive} setActive={setModalActive}>
                {<FormDriver  active={type} />}
            </Modal> 
        </div>

    )
}


export default DriverList;