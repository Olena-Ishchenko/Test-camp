import CamperCard from '../CamperCard/CamperCard';

const CamperList = ({ data }) => {
  return (
    <div>
      <ul>
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
