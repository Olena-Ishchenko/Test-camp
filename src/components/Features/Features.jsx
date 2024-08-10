import icons from '../../assets/icons.svg';
import FeatureItem from '../FeatureItem/FeatureItem';
import css from './Features.module.css';



const Features = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map(camper => (
          <li key={camper._id}>
            <FeatureItem
              icon={ }
              name={camper.details}
            />
          </li>
        ))}
      </ul>
      {/* <ul className={css.cardDetailsList}>
        <li className={css.cardDetailsItem}>
          <svg width={20} height={20}>
            <use href={`${icons}#icon-users`}></use>
          </svg>
          <p>{camper.adults} adults</p>
        </li>
        <li className={css.cardDetailsItem}>
          <svg width={20} height={20}>
            <use href={`${icons}#icon-automatic`}></use>
          </svg>
          <p>Automatic</p>
        </li>
        <li className={css.cardDetailsItem}>
          <svg width={20} height={20}>
            <use href={`${icons}#icon-AC`}></use>
          </svg>
          <p>AC</p>
        </li>
        <li className={css.cardDetailsItem}>
          <svg width={20} height={20}>
            <use href={`${icons}#icon-petrol`}></use>
          </svg>
          <p>Petrol</p>
        </li>
        <li className={css.cardDetailsItem}>
          <svg width={20} height={20}>
            <use href={`${icons}#icon-kitchen`}></use>
          </svg>
          <p>Kitchen</p>
        </li>
        <li className={css.cardDetailsItem}>
          <svg width={20} height={20}>
            <use href={`${icons}#icon-beds`}></use>
          </svg>
          <p>{camper.details.beds} beds</p>
        </li>
        <li className={css.cardDetailsItem}>
          <svg width={20} height={20}>
            <use href={`${icons}#icon-airConditioner`}></use>
          </svg>
          <p>{camper.details.airConditioner} air conditioner</p>
        </li>
        <li className={css.cardDetailsItem}>
          <svg width={20} height={20}>
            <use href={`${icons}#icon-CD`}></use>
          </svg>
          <p>CD</p>
        </li>
        <li className={css.cardDetailsItem}>
          <svg width={20} height={20}>
            <use href={`${icons}#icon-radio`}></use>
          </svg>
          <p>Radio</p>
        </li>
      </ul> */}
    </div>
  );
};

export default Features;
