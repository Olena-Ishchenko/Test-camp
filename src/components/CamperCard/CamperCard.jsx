import icons from '../../assets/icons.svg';
import css from './CamperCard.module.css';

const CamperCard = ({
  camper,
  handleFavoriteBtn,
  favoriteSelected,
  openModal,
}) => {
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
          <div className={css.cardPriceContainer}>
            <h2 className={css.cardName}>€{camper.price}</h2>
            <button
              className={`${
                favoriteSelected
                  ? css.cardBtnFavoriteSelected
                  : css.cardBtnFavorite
              }`}
              onClick={() => handleFavoriteBtn(camper._id)}
            >
              <svg width={24} height={24}>
                <use href={`${icons}#icon-heart`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.cardRatingContainer}>
          <p className={css.cardRatingText}>
            <svg className={css.cardIconStar} width={16} height={16}>
              <use href={`${icons}#icon-star`}></use>
            </svg>
            {camper.rating}({camper.reviews.length} Reviews)
          </p>

          <p className={css.cardLocationText}>
            <svg width={16} height={16}>
              <use href={`${icons}#icon-location`}></use>
            </svg>{' '}
            {camper.location}
          </p>
        </div>
        <p className={css.cardDescription}>{camper.description}</p>
        <ul className={css.cardDetailsList}>
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
              <use href={`${icons}#icon-AC`}></use>
            </svg>
            <p>AC</p>
          </li>
        </ul>
        <button
          className={css.cardBtnShowMore}
          type="submit"
          onClick={() => openModal(camper._id)}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default CamperCard;
