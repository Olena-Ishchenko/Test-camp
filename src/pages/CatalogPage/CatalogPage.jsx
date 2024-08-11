import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import FilterSection from '../../components/FilterSection/FilterSection';
import CamperList from '../../components/CamperList/CamperList';
import {
  selectCampers,
  selectItemById,
  selectTotalPage,
} from '../../redux/campers/selectors';
import css from './CatalogPage.module.css';
import { selectFavorites } from '../../redux/favorites/selectors';
import { addFavorite, deleteFavorite } from '../../redux/favorites/slice';
import CamperModal from '../../components/CamperModal/CamperModal';
import { setItemById } from '../../redux/campers/slice';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const data = useSelector(selectCampers);
  const totalPage = useSelector(selectTotalPage);
  const itemById = useSelector(selectItemById);
  const favorites = useSelector(selectFavorites);

  const favoritesCamperId = favorites.map(camper => camper._id);

  function handleFavoriteBtn(id) {
    dispatch(
      favoritesCamperId.includes(id)
        ? deleteFavorite(id)
        : addFavorite(data.find(camper => camper._id === id))
    );
  }

  const openModal = itemById !== null;

  function handleModal(id) {
    dispatch(setItemById(id));
  }

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  function handleLoadMore() {
    dispatch(fetchCampers());
  }

  return (
    <div className={css.catalogPageContainer}>
      <FilterSection />
      <CamperList
        data={data}
        handleFavoriteBtn={handleFavoriteBtn}
        favorites={favoritesCamperId}
        openModal={handleModal}
      />
      {!totalPage && (
        <button
          className={css.loadMoreBtn}
          type="submit"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
      {itemById && (
        <CamperModal
          className={css.modal}
          camper={data.find(camper => camper._id === itemById)}
          modalIsOpen={openModal}
          onChange={handleModal}
          camperItem={data.find(camper => camper._id === itemById)}
          details={data.find(camper => camper._id === itemById)}
          reviews={data.find(camper => camper._id === itemById)}
        />
      )}
    </div>
  );
}
