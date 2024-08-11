import css from './VehicleDetails.module.css';

const VehicleDetails = ({ details }) => {
  return (
    <div className={css.detailsContainer}>
      <h3 className={css.detailsTitle}>Vehicle details</h3>
      <ul className={css.detailsList}>
        <li className={css.detailsItem}>
          <p>Form</p>
          <p>{details.form}</p>
        </li>
        <li className={css.detailsItem}>
          <p>Length</p>
          <p>{details.length}</p>
        </li>
        <li className={css.detailsItem}>
          <p>Width</p>
          <p>{details.width}</p>
        </li>
        <li className={css.detailsItem}>
          <p>Height</p>
          <p>{details.height}</p>
        </li>
        <li className={css.detailsItem}>
          <p>Tank</p>
          <p> {details.tank}</p>
        </li>
        <li className={css.detailsItem}>
          <p>Consumption</p>
          <p>{details.consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
