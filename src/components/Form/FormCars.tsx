import * as React from 'react';
import styles from './FormMain.module.scss'

const FormCar = () => {
  return (
    <form className={styles.modal__form}>
          <label>
            Марка
            <input name="mark" type="text" />
          </label>
          <label>
            Модель
            <input name="model" type="text" />
          </label>
          <label>
            Год
            <input name="year" type="text" />
          </label>
          <label>
            Номер
            <input name="number" type="text" />
          </label>
          <label>
            Водитель
            <input name="driver" type="text" />
          </label>
          <label>
            Статус
            <select name="status">
              <option value="active">Активен</option>
              <option value="inactive">Неактивен</option>
              <option value="blocked">Заблокирован</option>
            </select>
        </label>
      <button className={styles.open__btn}>Submit</button>
    </form>
  );
};

export default FormCar;
