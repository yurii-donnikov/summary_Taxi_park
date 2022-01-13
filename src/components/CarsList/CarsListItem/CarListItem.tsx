import React from "react";
import {cars }from "../../carBase/CarBase";
import styles from "../CarList.module.scss";
import sprite from "../../../icons/symbol-defs.svg";

const CarItem = () => {
    return (
        <>
            {
                cars.map((car) => (
                    <li key={car.driver_id} className={styles.data_list}>

                        <p>{car.driver_id}</p>

                        <p>{car.driver}</p>

                        <p>{car.model}</p>

                        <p>{car.mark}</p>

                        <p>{car.year}</p>

                        <p>{car.number}</p>

                        <p>
                        {car.status.title}
                        </p>

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