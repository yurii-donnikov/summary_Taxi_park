import React from "react";
import cars from "../../carBase/CarBase";
import styles from "../CarList.module.scss";
import sprite from "../../../icons/symbol-defs.svg";

const CarItem = () => {
    return (
        <>
            {
                cars.map((car) => (
                    <li key={car.driver_id} className={styles.data_list}>

                        <p><strong>{car.driver_id}</strong></p>

                        <p><strong>{car.driver}</strong></p>

                        <p><strong>{car.model}</strong></p>

                        <p><strong>{car.mark}</strong></p>

                        <p><strong>{car.year}</strong></p>

                        <p><strong>{car.number}</strong></p>

                        <select name="status">
                        <option>{car.status.title}</option>
                        <option value="active">Активен</option>
                        <option value="inactive">Неактивен</option>
                        <option value="blocked">Заблокирован</option>
                        </select>

                        <button>
                            <svg className={styles.icon}>
                                <use href={sprite + "#icon-TypeDendie"}/>
                            </svg>
                        </button>

                        <p></p>

                    </li>
                ))
            }
        </>

    )
}

export default CarItem;