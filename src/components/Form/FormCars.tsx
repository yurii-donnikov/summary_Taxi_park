import { useFormik } from 'formik';
import styles from './FormMain.module.scss';
import { statuses } from '../carBase/CarBase';
import { useTranslation } from 'react-i18next';

interface IForm {
  mark: string;
  model: string;
  year: string;
  number: string;
  status: string;
}

interface IStatus {
  title: string;
  code: string;
}

const FormCar = ({
  setActive,
}: {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { t } = useTranslation();

  const getFullCarStatus = (status: string) => {
    return statuses.reduce((acc: IStatus, { title, code }) => {
      if (code === status) {
        acc.title = title;
        acc.code = code;
      }
      return acc;
    });
  };

  const addCar = (data: IForm) => {
    const car = {
      mark: data.mark,
      model: data.model,
      year: Date.parse(data.year),
      number: data.number,
      status: getFullCarStatus(data.status),
    };
    setTimeout(() => {
      alert(JSON.stringify(car, null, 2));
    }, 400);
    // dispatch(createCarRequest(car));
  };

  const formik = useFormik({
    initialValues: {
      mark: '',
      model: '',
      year: '',
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
        {t('button_create')}
      </button>
    </form>
  );
};

export default FormCar;
