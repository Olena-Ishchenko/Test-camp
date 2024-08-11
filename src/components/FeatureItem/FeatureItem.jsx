import icons from '../../assets/icons.svg';
import css from './FeatureItem.module.css';

const FeatureItem = ({ feature }) => {
  const { name, quantity, value } = feature;

  let icon;
  let title;

  if (name === 'adults') {
    icon = 'users';
    title = 'adults';
  }

  if (name === 'engine') {
    icon = 'petrol';
    title = value;
  }

  if (name === 'transmission') {
    icon = 'automatic';
    title = value;
  }

  if (name === 'airConditioner') {
    icon = 'airConditioner';
    title = 'Air conditioner';
  }

  if (name === 'bathroom') {
    icon = 'shower';
    title = 'Bathroom';
  }

  if (name === 'beds') {
    icon = 'beds';
    title = 'beds';
  }

  if (name === 'kitchen') {
    icon = 'kitchen';
    title = 'kitchen';
  }

  if (name === 'TV') {
    icon = 'TV';
    title = 'TV';
  }

  if (name === 'CD') {
    icon = 'CD';
    title = 'CD';
  }

  if (name === 'radio') {
    icon = 'radio';
    title = 'Radio';
  }

  if (name === 'shower') {
    icon = 'shower';
    title = 'Shower';
  }

  if (name === 'toilet') {
    icon = 'toilet';
    title = 'Toilet';
  }

  if (name === 'freezer') {
    icon = 'freezer';
    title = 'Freezer';
  }

  if (name === 'hob') {
    icon = 'hob';
    title = 'hob';
  }
  if (name === 'microwave') {
    icon = 'microwave';
    title = 'Microwave';
  }
  return (
    <>
      <svg className={css.featureIcon} width={20} height={20}>
        <use href={`${icons}#icon-${icon}`}></use>
      </svg>
      <p>{`${quantity ? quantity + ' ' : ''}${title}`}</p>
    </>
  );
};

export default FeatureItem;
