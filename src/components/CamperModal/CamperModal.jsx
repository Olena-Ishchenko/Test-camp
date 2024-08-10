import ReactModal from 'react-modal';
import icons from '../../assets/icons.svg';
import css from './CamperModal.module.css';

const CamperModal = ({ modalIsOpen = false, camper = {}, onChange }) => {
  ReactModal.setAppElement(document.getElementById('root'));
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={() => onChange(false)}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      className={css.modalContainer}
    >
      <div className={css.modalTitleContainer}>
        <h2 className={css.modalTitle}>{camper.name}</h2>
        <button
          className={css.modalCloseBtn}
          type="submit"
          onClick={() => onChange(null)}
        >
          <svg className={css.modalCloseIcon} width={32} height={32}>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </button>
      </div>
      <div className={css.modalRatingContainer}>
        {camper.reviews && (
          <p className={css.modalRatingText}>
            <svg className={css.modalIconStar} width={16} height={16}>
              <use href={`${icons}#icon-star`}></use>
            </svg>
            {camper.rating}({camper.reviews.length} Reviews)
          </p>
        )}

        <p className={css.modalLocationText}>
          <svg className={css.modalIconLocation} width={16} height={16}>
            <use href={`${icons}#icon-location`}></use>
          </svg>
          {camper.location}
        </p>
      </div>
      <h2 className={css.modalTitle}>€{camper.price}</h2>
      {camper.gallery && (
        <ul className={css.photoList}>
          {camper.gallery.map((photo, id) => (
            <li key={id}>
              <img
                className={css.photoItem}
                src={photo}
                alt="camper photo"
                width="290"
              />
            </li>
          ))}
        </ul>
      )}

      <p className={css.modalDescription}>{camper.description}</p>
      <div>
        <button
          className={css.modalBtn}
          type="submit"
          onClick={() => {
            console.log('features');
          }}
        >
          Features
        </button>
        <button
          className={css.modalBtn}
          type="submit"
          onClick={() => {
            console.log('reviews');
          }}
        >
          Reviews
        </button>
      </div>
    </ReactModal>
  );
};

export default CamperModal;
