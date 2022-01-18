import styles from './FormMain.module.scss';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import {
  fetchDriverStatusesRequest,
  updateDriverRequest,
} from '../../redux/drivers/driversActions';
import { useDispatch, useSelector } from 'react-redux';
import { getDriverStatuses } from '../../redux/drivers/driversSelectors';
import {
  IDriver,
  IDriverStatus,
  IUpdatedDriver,
} from '../../interfaces/driversInterfaces';

// interface IDriver {
//   id: number;
//   first_name: string;
//   last_name: string;
//   status: IDriverStatus;
// }

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

  const getFullDriverStatus = (status: string) => {
    return statuses.reduce((acc: IDriverStatus, { title, code }) => {
      if (code === status) {
        acc.title = title;
        acc.code = code;
      }
      return acc;
    });
  };

  const initialCurrentDriver: IUpdatedDriver = {
    id: 0,
    first_name: '',
    last_name: '',
    status: '',
  };

  const updateCurrentDriver = (data: IUpdatedDriver) => {
    const newDriver = {
      id: currentDriver.id,
      first_name: data.first_name,
      last_name: data.last_name,
      status: getFullDriverStatus(data.status),
    };

    dispatch(updateDriverRequest(newDriver));
  };

  const formik = useFormik({
    initialValues: initialCurrentDriver,

    onSubmit: values => {
      updateCurrentDriver(values);
      formik.resetForm();
      setActive(false);

      dispatch(fetchDriverStatusesRequest());
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
          placeholder={currentDriver.first_name}
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
          placeholder={currentDriver.last_name}
          pattern="[A-ZА-Я]{1}[a-zа-я]{1,15}"
          onChange={formik.handleChange}
          value={formik.values.last_name}
        />
      </label>
      <label>
        {t('driver_status')}
        <select
          name="status"
          onChange={formik.handleChange}
          value={formik.values.status}
        >
          <option disabled value="" label="">
            {currentDriver.status?.title}
          </option>
          {statuses.map((status: IDriverStatus, index) => (
            <option key={index} value={status.code}>
              {status.title}
            </option>
          ))}
        </select>
      </label>
      <button className={styles.open__btn} type="submit">
        {t('button_edit')}
      </button>
    </form>
  );
};

export default FormUpdateDriver;
