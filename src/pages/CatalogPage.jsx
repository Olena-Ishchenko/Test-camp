import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectError, selectIsLoading } from '../redux/campers/selectors';
import { fetchCampers } from '../redux/campers/operations';
import FilterSection from '../components/FilterSection/FilterSection';
import CamperList from '../components/CamperList/CamperList';
// import CamperCard from '../components/CamperCard/CamperCard';
import { selectCampers } from '../redux/campers/selectors';

export default function CatalogPage() {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectIsLoading);
  //   const error = useSelector(selectError);
  const data = useSelector(selectCampers);
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <FilterSection />
      <CamperList data={data} />
    </>
  );
}
