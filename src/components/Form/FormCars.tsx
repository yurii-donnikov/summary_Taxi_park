import { Field, Form, Formik} from 'formik';
import { stringify } from 'querystring';
import * as React from 'react';
import styles from './FormMain.module.scss';


const FormCar = () => {
  type formCarsType = {
    mark: string;
    model: string;
    year: number | undefined;
    number: string;
    driver: string;
    status: string;
  };

  const formValidate = (values: formCarsType) => {
    const errors = {};
    return errors;
  };

  const formCarsSubmit = (
    values: formCarsType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={{
        mark: '',
        model: '',
        year: undefined,
        number: '',
        driver: '',
        status: '',
      }}
      validate={formValidate}
      onSubmit={formCarsSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.modal__form}>
          <label>
            Марка
            <Field className={styles.form_input} type="text" name="mark" />
          </label>
          <label>
            Модель
            <Field className={styles.form_input} type="text" name="model" />
          </label>
          <label>
            Год
            <Field className={styles.form_input} type="number" name="year" />
          </label>
          <label>
            Номер
            <Field className={styles.form_input} type="text" name="number" />
          </label>
          <label>
            Водитель
            <Field className={styles.form_input} type="text" name="driver" />
          </label>
          <label>
            Статус
            <select name="status">
              <option value="active">Активен</option>
              <option value="inactive">Неактивен</option>
              <option value="blocked">Заблокирован</option>
            </select>
          </label>
          <button
            className={styles.open__btn}
            type="submit"
            disabled={isSubmitting}
          >
            Отправить
          </button>
        </Form>
      )}
    </Formik>
    // <form className={styles.modal__form}>
    //       <label>
    //         Марка
    //         <input name="mark" type="text" />
    //       </label>
    //       <label>
    //         Модель
    //         <input name="model" type="text" />
    //       </label>
    //       <label>
    //         Год
    //         <input name="year" type="text" />
    //       </label>
    //       <label>
    //         Номер
    //         <input name="number" type="text" />
    //       </label>
    //       <label>
    //         Водитель
    //         <input name="driver" type="text" />
    //       </label>
    //       <label>
    //         Статус
    // <select name="status">
    //   <option value="active">Активен</option>
    //   <option value="inactive">Неактивен</option>
    //   <option value="blocked">Заблокирован</option>
    // </select>
    //     </label>
    //   <button className={styles.open__btn}>Submit</button>
    // </form>
  );
};

export default FormCar;
