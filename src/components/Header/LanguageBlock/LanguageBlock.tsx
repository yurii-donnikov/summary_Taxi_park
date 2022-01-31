import { ChangeEvent } from 'react';
import i18next from 'i18next';
import classes from './LanguageBlock.module.scss';
import ru from '../../../assets/icons/ru.png';
import en from '../../../assets/icons/en.png';
import de from '../../../assets/icons/de.png';
import ua from '../../../assets/icons/ua.png';

export const LanguageBlock = () => {
  const onChangeLanguage = (event: ChangeEvent<HTMLInputElement>) => {
    i18next.changeLanguage(event.target.value);
  };

  return (
    <div className={classes.wrapper}>
      <label htmlFor="ru">
        <img src={ru} className={classes.langImg} alt="" />
      </label>
      <label htmlFor="en">
        <img src={en} className={classes.langImg} alt="" />
      </label>
      <label htmlFor="de">
        <img src={de} className={classes.langImg} alt="" />
      </label>
      <label htmlFor="ua">
        <img src={ua} className={classes.langImg} alt="" />
      </label>
      <input
        className={classes.radio}
        type="radio"
        id="ru"
        value="ru"
        name="language"
        onChange={onChangeLanguage}
      />
      <input
        className={classes.radio}
        type="radio"
        id="en"
        value="en"
        name="language"
        onChange={onChangeLanguage}
      />
      <input
        className={classes.radio}
        type="radio"
        id="de"
        value="de"
        name="language"
        onChange={onChangeLanguage}
      />
      <input
        className={classes.radio}
        type="radio"
        id="ua"
        value="ua"
        name="language"
        onChange={onChangeLanguage}
      />
    </div>
  );
};
