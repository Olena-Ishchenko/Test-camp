const FeatureItem = ({ icon, name }) => {
  if (name === 'airConditioner') {
    icon === '${icons}#icon-airConditioner';
  }

  if (name === 'bathroom') {
    icon === '${icons}#icon-shower';
  }

  if (name === 'kitchen') {
    icon === '${icons}#icon-kitchen';
  }

  if (name === 'TV') {
    icon === '${icons}#icon-TV';
  }

  if (name === 'CD') {
    icon === '${icons}#icon-CD';
  }

  if (name === 'radio') {
    icon === '${icons}#icon-radio';
  }

  if (name === 'shower') {
    icon === '${icons}#icon-shower';
  }

  if (name === 'toilet') {
    icon === '${icons}#icon-toilet';
  }

  if (name === 'freezer') {
    icon === '${icons}#icon-freezer';
  }

  if (name === 'hob') {
    icon === '${icons}#icon-hob';
  }
  if (name === 'microwave') {
    icon === '${icons}#icon-microwave';
  }
  return (
    <>
      <svg width={20} height={20}>
        <use href={icon}></use>
      </svg>
      <p>{name}</p>
    </>
  );
};

export default FeatureItem;
