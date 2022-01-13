import * as React from 'react';
import styles from './FormMain.module.scss';
import { Field, Form, Formik } from 'formik';

const FormDriver = ({active}:{active: boolean;
  }) => {
    type formDriversType = {
      first_name: string,
      last_name: string,
      date_birth: number | undefined,
      status: string,
    }
  
    const formValidate = (values: formDriversType) => {
      const errors = {};
      return errors;
    }
  
    const formDriversSubmit = (values: formDriversType, { setSubmitting }:{ setSubmitting: (isSubmitting: boolean) => void}) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }
  
    return (
      <Formik
         initialValues={{ first_name: '', last_name: '', date_birth: undefined, status: ''}}
         validate={formValidate}
         onSubmit={formDriversSubmit}
       >
         {({ isSubmitting }) => (
           <Form className={styles.modal__form}>
             <label>
              Имя
             <Field className={styles.form_input} type="text" name="first_name" />
             </label>
             <label>
              Фамилия
             <Field className={styles.form_input} type="text" name="last_name" />
             </label>
             {!active ? (
             <label>
              Дата рождения
             <Field className={styles.form_input} type="number" name="date_birth" />
             </label>
             ):('')}
             <label>
             Статус
             <select name="status">
                <option value="active">Активен</option>
                <option value="inactive">Неактивен</option>
                <option value="blocked">Заблокирован</option>
              </select>
              </label>
             <button className={styles.open__btn} type="submit" disabled={isSubmitting}>
               Отправить
             </button>
           </Form>
         )}
       </Formik>
  // return (
  //   <form className={styles.modal__form}>
  //         <label>
  //           Имя
  //           <input name="firstname" type="text" />
  //         </label>
  //         <label>
  //           Фамилия
  //           <input name="lastname" type="text" />
  //         </label>
  //         {!active ? (<label>
  //           Дата рождения
  //           <input name="birthdate" type="text" />
  //         </label>):('')}
  //         <label>
  //           Статус
  //           <select name="status">
  //             <option value="active">Активен</option>
  //             <option value="inactive">Неактивен</option>
  //             <option value="blocked">Заблокирован</option>
  //           </select>
  //       </label>
  //     <button className={styles.open__btn}>Submit</button>
  //   </form>
  );
};

export default FormDriver;
