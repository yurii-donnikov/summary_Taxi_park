import React from "react";
import styles from "./Main.module.scss"
import CarList from "../CarsList/CarList";
import DriverList from "../DriverList/DriverList";

const Main = () => {
    return (
        <main>
            <CarList/>
            <DriverList/>
        </main>
    )
}

export default Main;