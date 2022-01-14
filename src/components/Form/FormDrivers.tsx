import styles from './FormMain.module.scss';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { createDriverRequest } from '../../redux/drivers/driversActions';
import { useDispatch, useSelector } from 'react-redux';
import { getDriverStatuses } from '../../redux/drivers/driversSelectors';


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

const FormDriver = ({ active }: { active: boolean }) => {
  const dispatch = useDispatch();
  const statuses = useSelector(getDriverStatuses);

  const { t, i18n } = useTranslation();
  
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

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      date_birth: '',
      status: '',
    },
    onSubmit: values => {
      addDriver(values);
      formik.resetForm();
    },
  });

  return (
    <form className={styles.modal__form} onSubmit={formik.handleSubmit}>
      <label>
        {t('driver_name')}
        <input
          className={styles.form_input}
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
          {t('driver_birth')}
          <input
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
          {t('driver_birth')}
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
        {t('driver_status')}
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
      <button className={styles.open__btn} type="submit">
        {t('button_send')}
      </button>
    </form>
  );
};

export default FormDriver;
