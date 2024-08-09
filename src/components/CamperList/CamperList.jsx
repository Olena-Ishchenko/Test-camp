import CamperCard from '../CamperCard/CamperCard';
import css from './CamperList.module.css';

const CamperList = ({ data }) => {
  return (
    <div>
      <ul className={css.camperList}>
        {data.map(camper => (
          <li key={camper._id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperList;
