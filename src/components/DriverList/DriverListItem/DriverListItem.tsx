import React, {useState} from "react";
import drivers from "../../driverBase/DriverBase";
import styles from "../DriverList.module.scss";
import sprite from "../../../icons/symbol-defs.svg";
import Modal from "../../modal/Modal";

const DriverItem = () => {
    const [modalActive, setModalActive] = useState(false);

    const renderModalCar = () => {
        setModalActive(true);
    };
    return (
        <>
            {
                drivers.map((driver) => (
                    <li key={driver.id} className={styles.data_list}>

                        <p><strong>{driver.id}</strong></p>

                        <p><strong>{driver.full_name}</strong></p>

                        <p><strong>{driver.date_birth}</strong></p>

                        <p><strong>{driver.registration}</strong></p>

                        <select name="status">
                        <option>{driver.status.title}</option>
                        <option value="active">Активен</option>
                        <option value="inactive">Неактивен</option>
                        <option value="blocked">Заблокирован</option>
                        </select>

                        <div>
                            <button onClick={() => renderModalCar()}>
                                <svg className={styles.icon}>
                                    <use href={sprite + "#icon-TypeEdit"}/>
                                </svg>
                            </button>

                            <button>
                                <svg className={styles.icon}>
                                    <use href={sprite + "#icon-TypeWatch"}/>
                                </svg>
                            </button>

                            <button>
                                <svg className={styles.icon}>
                                    <use href={sprite + "#icon-TypeDendie"}/>
                                </svg>
                            </button>
                        </div>

                        <p></p>

                    </li>
                ))
            }
            <Modal active={modalActive} setActive={setModalActive}/>
        </>

    )
}

export default DriverItem;