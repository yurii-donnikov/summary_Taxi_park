import * as React from 'react';
import styles from './FormMain.module.scss'

const FormDriver = ({active}:{active: boolean;
  }) => {
  return (
    <form className={styles.modal__form}>
          <label>
            Имя
            <input name="firstname" type="text" />
          </label>
          <label>
            Фамилия
            <input name="lastname" type="text" />
          </label>
          {!active ? (<label>
            Дата рождения
            <input name="birthdate" type="text" />
          </label>):('')}
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

export default FormDriver;
