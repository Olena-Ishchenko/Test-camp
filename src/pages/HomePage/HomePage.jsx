import css from './HomePage.module.css';
import icons from '../../assets/icons.svg';

export default function HomePage() {
  return (
    <div className={css.homePageContainer}>
      <h1 className={css.title}>
        Welcome! Here you will find the camper of your dreams
      </h1>
      <ul className={css.iconList}>
        <li>
          <svg className={css.icon} width={48} height={48}>
            <use href={`${icons}#icon-type-van`}></use>
          </svg>
        </li>
        <li>
          <svg className={css.icon} width={48} height={48}>
            <use href={`${icons}#icon-fullyIntegrated`}></use>
          </svg>
        </li>
        <li>
          <svg className={css.icon} width={48} height={48}>
            <use href={`${icons}#icon-type-alcove`}></use>
          </svg>
        </li>
      </ul>
    </div>
  );
}
