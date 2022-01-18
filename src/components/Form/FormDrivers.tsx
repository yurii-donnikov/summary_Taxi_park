import styles from './FormMain.module.scss';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { createDriverRequest } from '../../redux/drivers/driversActions';
import { useDispatch, useSelector } from 'react-redux';
import { getDriverStatuses } from '../../redux/drivers/driversSelectors';
import { IDriverStatus, IFormDriver } from '../../interfaces/driversInterfaces';

const FormDriver = ({
  setActive,
}: {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch();
  const statuses = useSelector(getDriverStatuses);

  const { t } = useTranslation();

  const getFullDriverStatus = (status: string) => {
    return statuses.reduce((acc: IDriverStatus, { title, code }) => {
      if (code === status) {
        acc.title = title;
        acc.code = code;
      }
      return acc;
    });
  };

  const addDriver = (data: IFormDriver) => {
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
      <label>
        {t('driver_birth')}
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
      <label>
        {t('driver_status')}
        <select
          name="status"
          required
          onChange={formik.handleChange}
          value={formik.values.status}
        >
          <option disabled value="" label=""></option>

          {statuses.map((status: IDriverStatus, index) => (
            <option key={index} value={status.code}>
              {status.title}
            </option>
          ))}
        </select>
      </label>
      <button className={styles.open__btn} type="submit">
        {t('button_create')}
      </button>
    </form>
  );
};

export default FormDriver;
