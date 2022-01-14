import styles from './FormMain.module.scss';
import { useFormik } from 'formik';
import { createDriverRequest } from '../../redux/drivers/driversActions';
import { useDispatch, useSelector } from 'react-redux';
import { getDriverStatuses } from '../../redux/drivers/driversSelectors';
import { useState } from 'react';

interface IForm {
  first_name: string;
  last_name: string;
  date_birth: string;
  status: string;
}

interface IStatus {
  title: string;
  code: string;
}

const FormDriver = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch();
  const statuses = useSelector(getDriverStatuses);

  const getFullDriverStatus = (status: string) => {
    return statuses.reduce((acc: IStatus, { title, code }) => {
      if (code === status) {
        acc.title = title;
        acc.code = code;
      }

      return acc;
    });
  };

  const addDriver = (data: IForm) => {
    const driver = {
      first_name: data.first_name,
      last_name: data.last_name,
      date_birth: Date.parse(data.date_birth),
      status: getFullDriverStatus(data.status),
    };

    dispatch(createDriverRequest(driver));
  };

  const init = (active: boolean): IForm => {
    let temp;
    let temp2;
    if(active){
      temp = {
        first_name: 'fffff',
        last_name: '',
        date_birth: '',
        status: '',
      }
      return temp;
    } 
      temp2 = {
        first_name: 'aaa',
        last_name: 'aaaa',
        date_birth: '',
        status: '',
      }
      return temp2;
    
  };

  
  const formik = useFormik({
    initialValues: init(active),
    
    onSubmit: values => {
      if (!active) {
        addDriver(values);
        formik.resetForm();
        setActive(false);
      } else {
        console.log("AAAAAAAAAAAAAAAAAAAAA")
      }
    },
  });

  return (
    <form className={styles.modal__form} onSubmit={formik.handleSubmit}>
      <label>
        Имя
        <input
          className={styles.form_input}
          required
          type="text"
          name="first_name"
          placeholder=" "
          pattern="[A-ZА-Я]{1}[a-zа-я]{1,15}"
          onChange={formik.handleChange}
          value={formik.values.first_name}
        />
      </label>
      <label>
        Фамилия
        <input
          className={styles.form_input}
          required
          type="text"
          name="last_name"
          placeholder=" "
          pattern="[A-ZА-Я]{1}[a-zа-я]{1,15}"
          onChange={formik.handleChange}
          value={formik.values.last_name}
        />
      </label>
      {!active ? (
        <label>
          Дата рождения
          <input
            required
            type="date"
            name="date_birth"
            min="1970-01-01"
            max="2004-01-01"
            onChange={formik.handleChange}
            value={formik.values.date_birth}
          />
        </label>
      ) : (
        <label>
          Дата рождения
          <input
            disabled
            type="date"
            name="date_birth"
            min="1970-01-01"
            max="2004-01-01"
            onChange={formik.handleChange}
            value={formik.values.date_birth}
          />
        </label>
      )}
      <label>
        Статус
        <select
          name="status"
          required
          onChange={formik.handleChange}
          value={formik.values.status}
        >
          {statuses.map((status: IStatus) => (
            <option key={status.code} value={status.code}>
              {status.title}
            </option>
          ))}
        </select>
      </label>
      {!active ? (
        <button className={styles.open__btn} type="submit">
          Создать
        </button>
      ) : (
        <button className={styles.open__btn} type="submit">
          Изменить
        </button>
      )}
    </form>
  );
};

export default FormDriver;
