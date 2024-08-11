import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

const AppBar = () => {
  return (
    <div className={css.navContainer}>
      <nav className={css.navList}>
        <NavLink className={css.navItem} to="/">
          Home
        </NavLink>

        <NavLink className={css.navItem} to="/catalog">
          Catalog
        </NavLink>

        <NavLink className={css.navItem} to="/favorites">
          Favorite
        </NavLink>
      </nav>
    </div>
  );
};

export default AppBar;
