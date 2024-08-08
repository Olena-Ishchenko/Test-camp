import icons from '../../assets/icons.svg';
import css from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  return (
    <div className={css.cardContainer}>
      <img
        className={css.cardPhoto}
        src={camper.gallery[0]}
        alt="camper photo"
        width="290"
      />
      <div className={css.cardInfoContainer}>
        <div className={css.cardNameContainer}>
          <h2 className={css.cardName}>{camper.name}</h2>
          <div>
            <h2 className={css.cardName}>€{camper.price}</h2>
            <button onClick={() => console.log('add')}>
              <svg width={24} height={24}>
                <use href={`${icons}#icon-Heart`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <p>
            {camper.rating}({camper.reviews.length} Reviews)
          </p>
          <svg width={24} height={24}>
            <use href={`${icons}#icon-Location`}></use>
          </svg>
          {camper.location}
        </div>
        <p className={css.cardDescription}>{camper.description}</p>
        <ul>
          <li>
            <svg width={20} height={20}>
              <use href={`${icons}#icon-Users`}></use>
            </svg>
            <p>{camper.adults} adults</p>
          </li>
          <li>
            <svg width={20} height={20}>
              <use href={`${icons}#icon-Automatic`}></use>
            </svg>
            <p>Automatic</p>
          </li>
          <li>
            <svg width={20} height={20}>
              <use href={`${icons}#icon-Petrol`}></use>
            </svg>
            <p>Petrol</p>
          </li>
          <li>
            <svg width={20} height={20}>
              <use href={`${icons}#icon-Kitchen`}></use>
            </svg>
            <p>Kitchen</p>
          </li>
          <li>
            <svg width={20} height={20}>
              <use href={`${icons}#icon-Beds`}></use>
            </svg>
            <p>{camper.details.beds} beds</p>
          </li>
          <li>
            <svg width={20} height={20}>
              <use href={`${icons}#icon-AC`}></use>
            </svg>
            <p>AC</p>
          </li>
        </ul>
        <button type="submit" onClick={() => console.log('show')}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default CamperCard;
