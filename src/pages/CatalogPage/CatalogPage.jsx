import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectError, selectIsLoading } from '../redux/campers/selectors';
import { fetchCampers } from '../../redux/campers/operations';
import FilterSection from '../../components/FilterSection/FilterSection';
import CamperList from '../../components/CamperList/CamperList';
// import CamperCard from '../components/CamperCard/CamperCard';
import { selectCampers, selectTotalPage } from '../../redux/campers/selectors';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectIsLoading);
  //   const error = useSelector(selectError);
  const data = useSelector(selectCampers);
  const totalPage = useSelector(selectTotalPage);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  function handleLoadMore() {
    dispatch(fetchCampers());
  }

  return (
    <>
      <FilterSection />
      <CamperList data={data} />
      {!totalPage && (
        <button
          className={css.loadMoreBtn}
          type="submit"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </>
  );
}
