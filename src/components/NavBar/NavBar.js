import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = () => (
  <nav className={s.nav}>
    <ul className={s.list}>
      <li>
        <NavLink to="/counter">Counter</NavLink>
      </li>
      <li>
        <NavLink to="/todo">Todo</NavLink>
      </li>
      <li>
        <NavLink to="/colorpicker">ColorPicker</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
