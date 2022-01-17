import styles from './FormMain.module.scss';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import {
  fetchDriversRequest,
  fetchDriverStatusesRequest,
  updateDriverRequest,
} from '../../redux/drivers/driversActions';
import { useDispatch, useSelector } from 'react-redux';
import { getDriverStatuses } from '../../redux/drivers/driversSelectors';
import { IDriverStatus, IDriver } from '../../interfaces/driversInterfaces';
import { updateDriver } from '../apiService/apiDrivers';
import { useEffect } from 'react';

const FormUpdateDriver = ({
  setActive,
  currentDriver,
}: {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  currentDriver: Partial<IDriver>;
}) => {
  const dispatch = useDispatch();
  const statuses = useSelector(getDriverStatuses);

  const { t } = useTranslation();

  // console.log("currentDriver >>>>", currentDriver);

  // const getFullDriverStatus = (status: IDriverStatus) => {
  //   return statuses.reduce((acc: IDriverStatus, { title, code }) => {
  //     if (code === status.code) {
  //       acc.title = title;
  //       acc.code = code;
  //     }
  //     return acc;
  //   });
  // };

  interface updateCurDriver {
    first_name: string;
    last_name: string;
  }

  const initialCurrentDriver: Partial<IDriver> = {
    first_name: '',
    last_name: '',
  };

  const updateCurrentDriver = (data: Partial<IDriver>) => {
    const newDriver = {
      id: currentDriver.id,
      first_name: data.first_name,
      last_name: data.last_name,
    };

    dispatch(updateDriverRequest(newDriver));

  };

  const formik = useFormik({
    initialValues: initialCurrentDriver,

    onSubmit: values => {
      updateCurrentDriver(values);
      formik.resetForm();
      setActive(false);
    },
  });

  return (
    <form className={styles.modal__form} onSubmit={formik.handleSubmit}>
      <label>
        {t('driver_name')}
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
        {t('driver_surname')}
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
      {/* <label>
        {t('driver_status')}
        <select
          name="status"
          required
          onChange={formik.handleChange}
          value={formik.values.status?.code}
        >
          {statuses.map((status: IDriverStatus) => (
            <option key={status.code} value={status.code}>
              {status.title}
            </option>
          ))}
        </select>
      </label> */}
      <button className={styles.open__btn} type="submit">
        {t('button_edit')}
      </button>
    </form>
  );
};

export default FormUpdateDriver;
