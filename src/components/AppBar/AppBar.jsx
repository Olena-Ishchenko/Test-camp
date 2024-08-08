import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorite</NavLink>
    </>
  );
};

export default AppBar;
