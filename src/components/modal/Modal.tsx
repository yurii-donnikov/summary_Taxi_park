import React, { useState } from "react";
import styles from "./Modal.module.scss"

const Modal = ({
    active,
    setActive,
}: {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
    return (
        <div
            className={styles[active ? 'modal__active' : 'modal']}
            onClick={() => setActive(false)}
        >
            <div
                className={styles.modal__content}
                onClick={event => event.stopPropagation()}
            >
                <form className={styles.modal__form} action="">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button className={styles.open__btn}>Submit</button>
                </form>
            </div>
        </div>
    );

    
};

export default Modal;