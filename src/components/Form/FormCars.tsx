import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styles from './FormMain.module.scss';
import { getCarsStatuses } from '../../redux/cars/carsSelectors';
import { IFormCar, IStatusCar } from '../../interfaces/carsInterfaces';
import { createCarRequest } from '../../redux/cars/carsActions';

const FormCar = ({
  setActive,
  currentDriverId,
}: {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  currentDriverId: number;
}) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const statusesCar = useSelector(getCarsStatuses);

  const getFullCarStatus = (status: string) => {
    return statusesCar.reduce((acc: IStatusCar, { title, code }) => {
      if (code === status) {
        acc.title = title;
        acc.code = code;
      }
      return acc;
    });
  };

  const addCar = (data: IFormCar) => {
    const car = {
      driver_id: currentDriverId,
      mark: data.mark,
      model: data.model,
      year: data.year,
      number: data.number,
      status: getFullCarStatus(data.status),
    };

    dispatch(createCarRequest(car));
  };

  const formik = useFormik({
    initialValues: {
      driver_id: 0,
      mark: '',
      model: '',
      year: 0,
      number: '',
      status: '',
    },
    onSubmit: values => {
      addCar(values);
      formik.resetForm();
      setActive(false);
    },
  });

  return (
    <form className={styles.modal__form} onSubmit={formik.handleSubmit}>
      <label>
        {t('car_brand')}
        <input
          className={styles.form_input}
          required
          type="text"
          name="mark"
          placeholder=" "
          pattern="[A-ZА-Я]{1}[a-zа-я]{1,15}"
          onChange={formik.handleChange}
          value={formik.values.mark}
        />
      </label>
      <label>
        {t('car_model')}
        <input
          className={styles.form_input}
          required
          type="text"
          name="model"
          placeholder=" "
          pattern="[A-ZА-Я]{1}[a-zа-я]{1,15}"
          onChange={formik.handleChange}
          value={formik.values.model}
        />
      </label>
      <label>
        {t('car_year')}
        <input
          className={styles.form_input}
          required
          type="number"
          name="year"
          min="1975"
          max="2022"
          pattern="\d{4}"
          placeholder=" "
          onChange={formik.handleChange}
          value={formik.values.year}
        />
      </label>
      <label>
        {t('car_number')}
        <input
          className={styles.form_input}
          required
          type="text"
          name="number"
          placeholder=" "
          pattern="[a-zA-Z]{2}\d{4}[a-zA-Z]{2}"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
      </label>
      <label>
        Статус
        <select
          name="status"
          required
          onChange={formik.handleChange}
          value={formik.values.status}
        >
          <option disabled value="" label=""></option>

          {statusesCar.map((status: IStatusCar, index) => (
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

export default FormCar;
