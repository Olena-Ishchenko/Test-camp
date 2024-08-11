import FeatureItem from '../FeatureItem/FeatureItem';
import css from './Features.module.css';

function array(camper) {
  const rez = [];

  if (camper.adults) {
    rez.push({ name: 'adults', quantity: camper.adults });
  }

  if (camper.engine) {
    rez.push({ name: 'engine', value: camper.engine });
  }

  if (camper.transmission) {
    rez.push({ name: 'transmission', value: camper.transmission });
  }

  if (camper.details.airConditioner) {
    rez.push({
      name: 'airConditioner',
      quantity: camper.details.airConditioner,
    });
  }

  if (camper.details.bathroom) {
    rez.push({
      name: 'bathroom',
    });
  }

  if (camper.details.kitchen) {
    rez.push({
      name: 'kitchen',
    });
  }

  if (camper.details.beds) {
    rez.push({
      name: 'beds',
      quantity: camper.details.beds,
    });
  }

  if (camper.details.TV) {
    rez.push({
      name: 'TV',
    });
  }

  if (camper.details.CD) {
    rez.push({
      name: 'CD',
    });
  }

  if (camper.details.radio) {
    rez.push({
      name: 'radio',
    });
  }

  if (camper.details.shower) {
    rez.push({
      name: 'shower',
    });
  }

  if (camper.details.toilet) {
    rez.push({
      name: 'toilet',
    });
  }

  if (camper.details.freezer) {
    rez.push({
      name: 'freezer',
    });
  }

  if (camper.details.hob) {
    rez.push({
      name: 'hob',
      quantity: camper.details.hob,
    });
  }

  if (camper.details.microwave) {
    rez.push({
      name: 'microwave',
    });
  }

  return rez;
}

const Features = ({ camperItem }) => {
  const newArray = array(camperItem); // {name, quantity} camper[feature]
  return (
    <div>
      <ul className={css.featuresList}>
        {newArray.map(feature => (
          <li className={css.featureItem} key={feature.name}>
            <FeatureItem feature={feature} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
