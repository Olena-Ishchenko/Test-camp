import CamperCard from '../CamperCard/CamperCard';
import css from './CamperList.module.css';

const CamperList = ({ data, handleFavoriteBtn, favorites, openModal }) => {
  return (
    <div>
      <ul className={css.camperList}>
        {data.map(camper => (
          <li key={camper._id}>
            <CamperCard
              camper={camper}
              handleFavoriteBtn={handleFavoriteBtn}
              favoriteSelected={favorites.includes(camper._id)}
              openModal={openModal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperList;
