import { useDispatch, useSelector } from 'react-redux';
import CamperList from '../../components/CamperList/CamperList';
import { selectFavorites } from '../../redux/favorites/selectors';
import { deleteFavorite } from '../../redux/favorites/slice';
import css from './FavoritePage.module.css';

export default function FavoritePage() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const favoritesCamperId = favorites.map(camper => camper._id);

  function handleFavoriteBtn(id) {
    dispatch(deleteFavorite(id));
  }

  return (
    <div className={css.favoritePageContainer}>
      <CamperList
        data={favorites}
        handleFavoriteBtn={handleFavoriteBtn}
        favorites={favoritesCamperId}
      />
    </div>
  );
}
