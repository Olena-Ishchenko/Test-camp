import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
const CamperCard = () => {
  const dispatch = useDispatch();
  const data = dispatch(fetchCampers());
  //   return (
  //     <div>
  //       <img src="" alt="" />
  //       <h2></h2>
  //     </div>
  //   );
};

export default CamperCard;
